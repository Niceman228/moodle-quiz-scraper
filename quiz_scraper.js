// Получаем все ссылки на страницы с вопросами из навигации по тесту
let questionLinks = Array.from(document.querySelectorAll('.qnbutton')).map(link => link.href);
let allQuestions = []; // Массив для хранения всех вопросов и вариантов ответов

// Функция для загрузки вопросов с каждой страницы и извлечения текста с вариантами ответов
async function collectAllQuestions() {
    for (let i = 0; i < questionLinks.length; i++) {
        try {
            // Запрос на получение страницы вопроса
            let response = await fetch(questionLinks[i]);
            let pageText = await response.text();

            // Создаем временный элемент для парсинга HTML
            let parser = new DOMParser();
            let doc = parser.parseFromString(pageText, 'text/html');

            // Извлекаем все блоки вопросов на текущей странице
            let questionBlocks = doc.querySelectorAll('.que');

            // Обрабатываем каждый вопрос на странице
            questionBlocks.forEach((questionBlock, questionIndex) => {
                let questionTextElement = questionBlock.querySelector('.qtext');
                let questionText = `Вопрос ${i + 1}.${questionIndex + 1}: ${questionTextElement.innerText.trim()}`;

                // Находим все выпадающие списки и радио кнопки внутри текущего вопроса
                let selectElements = questionBlock.querySelectorAll('select');
                let radioOptions = questionBlock.querySelectorAll('.answer .r0, .answer .r1');

                // Обрабатываем каждый выпадающий список и добавляем его варианты в место пропуска
                selectElements.forEach((select, selectIndex) => {
                    let options = Array.from(select.options).map(option => option.text.trim());
                    let optionsText = `[Варианты: ${options.join(' | ')}]`;

                    // Заменяем первое появление пустого места `_____` на текст с вариантами
                    questionText = questionText.replace('_____', optionsText);
                });

                // Если есть варианты ответа в виде радио кнопок, добавляем их к вопросу
                if (radioOptions.length > 0) {
                    let radioText = Array.from(radioOptions)
                        .map((option, optionIndex) => `Вариант ${optionIndex + 1}: ${option.innerText.trim()}`)
                        .join('\n');
                    questionText += `\n${radioText}`;
                }

                // Добавляем обработанный текст вопроса в массив
                allQuestions.push(questionText);
            });

            // Вывод прогресса в консоль
            console.log(`Прогресс: ${i + 1} из ${questionLinks.length} страниц собрано.`);
        } catch (error) {
            console.log(`Ошибка при загрузке вопроса на странице ${i + 1}:`, error);
        }
    }
    
    // Выводим все вопросы с вариантами ответов после завершения сбора
    console.log("Все вопросы с вариантами ответов:");
    allQuestions.forEach(question => console.log(question));
}

// Запускаем сбор вопросов и вариантов ответов
collectAllQuestions();
