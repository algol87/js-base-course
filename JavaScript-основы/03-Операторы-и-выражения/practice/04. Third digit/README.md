# Третья цифра

## Описание
Реализуйте код javascript, который принимает целое число **N** как параметр и печатает **true**, если третья цифра **N** - **7** или **"False"**, далее вы должны напечатать третьи цифры **N**.
   - Подсчет производится с **справа налево**

## Входные данные
- Ввод всегда будет состоять из массива, содержащего ровно один элемент, целое число **N** в виде строки.

## Вывод
- Вывод должен быть одиночной строкой, следуйте формату выше
- Вы можете использовать `console.log` для распечатки результатов, или вы можете использовать` return` для возврата ответа. Оба являются правильными.

## Пример тестов

### Тест 1

#### Ввод
```js
['5']
```

#### Вывод
```
false 0
```

### Тест 2

#### Ввод
```js
['701']
```

#### Вывод
```
true
```

### Тест 3

#### Ввод
```js
['9703']
```

#### Вывод
```
true
```

### Тест 4

#### Ввод
```js
['877']
```

#### Вывод
```
false 8
```

### Тест 5

#### Ввод
```js
['777877']
```

#### Вывод
```
false 8
```

### Тест 6

#### Ввод
```js
['9999799']
```

#### Вывод
```
true
```
