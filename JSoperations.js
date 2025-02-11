JavaScript: Arrays, Dates, Fundamentals, Objects

1. Массивы (Arrays)
Массивы в JavaScript - это объекты, содержащие упорядоченные значения.

Основные методы массивов:

- push() - Добавляет элемент в конец массива
- pop() - Удаляет последний элемент массива
- shift() - Удаляет первый элемент массива
- unshift() - Добавляет элемент в начало массива
- slice() - Возвращает часть массива
- splice() - Изменяет содержимое массива (добавляет/удаляет)
- concat() - Объединяет массивы
- forEach() - Перебирает массив без возврата нового
- map() - Создаёт новый массив, применяя функцию к каждому элементу
- filter() - Фильтрует элементы по условию
- find() - Возвращает первый элемент, удовлетворяющий условию
- findIndex() - Возвращает индекс первого найденного элемента
- reduce() - Сокращает массив к одному значению
- sort() - Сортирует элементы массива
- reverse() - Разворачивает массив

Пример:
```javascript
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b); // [1, 1, 3, 4, 5, 9]
```

---

2. Даты (Date)
Объект Date используется для работы с датами и временем.

Создание даты:
```javascript
let now = new Date(); // Текущая дата и время
let specificDate = new Date(2024, 1, 11); // 11 февраля 2024
let fromTimestamp = new Date(1707667200000); // Из миллисекунд
```

Основные методы работы с датами:
- getFullYear() - Получить год
- getMonth() - Получить месяц (0-11)
- getDate() - Получить число месяца
- getDay() - Получить день недели (0-6)
- getHours() - Получить часы
- getMinutes() - Получить минуты
- getSeconds() - Получить секунды
- getTime() - Получить timestamp (миллисекунды с 1970)
- setFullYear() - Установить год
- setMonth() - Установить месяц
- setDate() - Установить день месяца

Пример:
```javascript
let date = new Date();
console.log(date.getFullYear()); // 2025
console.log(date.getMonth()); // 1 (февраль)
```

---

3. Основы (Fundamentals)
Операторы
- Арифметические (+, -, *, /, %, **)
- Сравнения (==, ===, !=, >, <, >=, <=)
- Логические (&&, ||, !)
- Тернарный (условие ? выражение1 : выражение2)

Пример:
```javascript
let a = 5, b = 10;
console.log(a > b ? 'a больше' : 'b больше'); // "b больше"
```

Циклы
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

Функции
```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10)); // 15
```
```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12
```

---

4. Объекты (Objects)
Объекты используются для хранения пар "ключ-значение".

Создание объекта:
```javascript
let user = {
    name: "Иван",
    age: 25,
    isAdmin: true
};
```

Основные операции с объектами:
- Доступ к свойству - object.property или object['property']
- Добавление/изменение - object.property = value;
- Удаление - delete object.property;
- Проверка наличия - "property" in object
- Перебор свойств - for (let key in object) {}

Методы объектов
```javascript
let user = {
    name: "Иван",
    sayHello() {
        console.log("Привет, " + this.name);
    }
};
user.sayHello(); // "Привет, Иван"
```

Object.keys(), Object.values(), Object.entries()
- Object.keys(obj) - Возвращает массив ключей
- Object.values(obj) - Возвращает массив значений
- Object.entries(obj) - Возвращает массив [ключ, значение]

Пример:
```javascript
let user = { name: "Иван", age: 25 };
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["Иван", 25]
console.log(Object.entries(user)); // [["name", "Иван"], ["age", 25]]
```

---

Вывод
JavaScript предоставляет мощные методы для работы с массивами, датами, объектами и основными операциями языка. Важно разбираться в этих механизмах, чтобы эффективно писать код.

