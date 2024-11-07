# Moodle Quiz Scraper

JavaScript-скрипт для автоматического сбора текста вопросов и вариантов ответов с тестовых страниц Moodle. Этот скрипт написан для использования в консоли разработчика браузера и предназначен для автоматизации процесса извлечения вопросов из тестов.

## Возможности

- **Сбор текста вопросов**: Автоматически извлекает текст вопросов с тестовых страниц Moodle.
- **Поддержка вариантов ответов**:
  - Извлечение и отображение вариантов ответов из выпадающих списков (`<select>`).
  - Извлечение и отображение вариантов ответов из радиокнопок (`radio`).
- **Вывод прогресса**: Показывает прогресс сбора данных по мере перехода по страницам.
- **Консольный вывод**: Выводит все вопросы и варианты ответов в удобном виде в консоли для последующего копирования или анализа.

## Использование

### Шаг 1. Открытие Moodle

1. Откройте свой аккаунт Moodle и перейдите на страницу с тестом, из которого вы хотите извлечь вопросы.
2. Убедитесь, что навигация по вопросам теста (номера вопросов) доступна на странице.

### Шаг 2. Открытие консоли разработчика

1. Нажмите `F12` или `Ctrl+Shift+I` (на Windows) / `Cmd+Opt+I` (на Mac), чтобы открыть инструменты разработчика в вашем браузере.
2. Перейдите на вкладку **Console**.

### Шаг 3. Запуск скрипта

1. Скопируйте содержимое файла `quiz_scraper.js`.
2. Вставьте скопированный код в консоль браузера и нажмите `Enter`.

### Шаг 4. Сбор вопросов

После запуска скрипта он начнет переходить по страницам с вопросами и собирать текст вопросов и их вариантов ответов. Прогресс будет отображаться в консоли. По завершении работы скрипта все вопросы и варианты ответов появятся в консоли.

### Пример вывода

Пример вывода вопросов с вариантами ответов в консоли:

Прогресс: 1 из 10 страниц собрано. ... Вопрос 1.1: What is the capital of France? Вариант 1: Paris Вариант 2: London Вариант 3: Berlin

Вопрос 1.2: Select the correct answer [Варианты: Option 1 | Option 2 | Option 3] ...

# Где можно использовать этот скрипт

Скрипт может быть полезен для:
- Студентов и преподавателей, которым требуется быстро получить список вопросов для анализа или подготовки.
- Тех, кто хочет сохранить список вопросов для офлайн-обучения или повторения.
- Автоматизации сбора данных с учебных платформ для проведения анализа и улучшения учебного процесса.

**Примечание**: Убедитесь, что использование скрипта не нарушает правила вашей образовательной платформы или учебного заведения. Этот инструмент предназначен исключительно для учебных целей.

## Ограничения

- **Работа только с тестами Moodle**: Скрипт работает с тестами Moodle и может не поддерживать другие платформы.
- **Разметка страниц**: Если страницы тестов имеют нестандартную разметку, скрипт может работать некорректно.
- **Переход между страницами**: Скрипт работает только для тестов, где возможен переход по страницам вопросов.
- **Интернет-соединение**: Требуется интернет для загрузки страниц, если тест разбит на несколько страниц.

## Лицензия

Этот проект распространяется под лицензией MIT. См. файл LICENSE для подробностей.
