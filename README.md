# HexlexTest

Проект для тестирования функций работы с массивами на JavaScript с использованием Jest и FastCheck.

## Функции

В проекте реализованы следующие функции:

1. **`removeDuplicates(arr)`**  
   Удаляет дубликаты из массива.  
   Пример: `removeDuplicates([1, 2, 2, 3])` → `[1, 2, 3]`

2. **`sortNumbers(arr)`**  
   Сортирует массив чисел по возрастанию.  
   Пример: `sortNumbers([3, 1, 2])` → `[1, 2, 3]`

3. **`sumPositiveNumbers(arr)`**  
   Суммирует все положительные числа в массиве.  
   Пример: `sumPositiveNumbers([1, -2, 3])` → `4`

4. **`groupByParity(arr)`**  
   Разделяет числа на четные и нечетные.  
   Пример: `groupByParity([1, 2, 3, 4])` → `{ even: [2, 4], odd: [1, 3] }`

5. **`findCommonElements(arr1, arr2)`**  
   Находит общие элементы в двух массивах.  
   Пример: `findCommonElements([1, 2, 3], [2, 3, 4])` → `[2, 3]`

## Установка

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/vadimkulishov/HexlexTest.git
   cd HexlexTest
   ```

2. Установите зависимости:

    ```bash
    npm install
    ```

3. Запуск тестов
Тесты написаны с использованием Jest и FastCheck. Чтобы запустить их, выполните:

    ```bash
    npm test
    ```

## Структура проекта

```arrayUtils.js```
Основной файл с реализацией функций.

```test.js```
Файл с тестами для функций.

```package.json```
Конфигурация проекта и зависимости.

```.babelrc```
Конфигурация Babel для поддержки ES6-синтаксиса.

```jest.config.js```
Конфигурация Jest.

## Используемые технологии
Jest — фреймворк для тестирования JavaScript.

FastCheck — библиотека для property-based тестирования.

Babel — транспиляция ES6+ в совместимый JavaScript.


## Автор
Vadim Kulishov