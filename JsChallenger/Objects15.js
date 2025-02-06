//Objects15.js
//clear
//node Objects15.js



function myFunction1(obj) {
    return obj.country;
}

console.log('1 Accessing object properties one');
console.log('Write a function that takes an object with two properties as argument. It should return the value of the property with key country');
console.log(myFunction1({ continent: 'Asia', country: 'Japan' }));  // expected: 'Japan'
console.log(myFunction1({ country: 'Sweden', continent: 'Europe' }));  // expected: 'Sweden'
console.log(myFunction1({ continent: 'Africa', country: 'Kenya' }));  // expected: 'Kenya'
console.log(myFunction1({ country: 'Australia', continent: 'Oceania' }));  // expected: 'Australia'




function myFunction2(obj) {
    return obj['prop-2'];
}

console.log('2 Accessing object properties two');
console.log('Write a function that takes an object with two properties as argument. It should return the value of the property with key "prop-2"');
console.log(myFunction2({ one: 1, 'prop-2': 2 }));  // expected: 2
console.log(myFunction2({ 'prop-2': 'two', prop: 'test' }));  // expected: 'two'
console.log(myFunction2({ 'prop-2': 100, name: 'example' }));  // expected: 100
console.log(myFunction2({ 'prop-2': 'hello', language: 'JavaScript' }));  // expected: 'hello'



function myFunction3(obj, key) {
    return obj[key];
}

console.log('3 Accessing object properties three');
console.log('Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string');
console.log(myFunction3({ one: 1, 'prop-2': 2 }, 'one'));  // expected: 1
console.log(myFunction3({ 'prop-2': 'two', prop: 'test' }, 'prop-2'));  // expected: 'two'
console.log(myFunction3({ 'prop-2': 100, name: 'example' }, 'name'));  // expected: 'example'
console.log(myFunction3({ 'prop-2': 'hello', language: 'JavaScript' }, 'language'));  // expected: 'JavaScript'




function myFunction4(a, b) {
    return b in a;
}

console.log('4 Check if property exists in object');
console.log('Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key "b". Return false otherwise');
console.log(myFunction4({ one: 1, 'prop-2': 2 }, 'one'));  // expected: true
console.log(myFunction4({ 'prop-2': 'two', prop: 'test' }, 'prop-2'));  // expected: true
console.log(myFunction4({ 'prop-2': 100, name: 'example' }, 'name'));  // expected: true
console.log(myFunction4({ 'prop-2': 'hello', language: 'JavaScript' }, 'z'));  // expected: false
console.log(myFunction4({ 'prop-2': 'hello', z: undefined }, 'z'));  // expected: true




function myFunction5(a, b) {
    return a[b] ? true : false;
}

console.log('5 Check if property exists in object and is truthy');
console.log('Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key "b", but only if it has a truthy value.');
console.log(myFunction5({a: 1, b: 2, c: 3}, 'b'));  // expected: true
console.log(myFunction5({x: 'a', y: null, z: 'c'}, 'y'));  // expected: false
console.log(myFunction5({x: 'a', b: 'b', z: undefined}, 'z'));  // expected: false
console.log(myFunction5({x: 'a', y: 'yes', z: false}, 'z'));  // expected: false
console.log(myFunction5({a: 10, b: 'test', c: ''}, 'c'));  // expected: false





function myFunction6(a) {
    return { key: a };
}

console.log('6 Creating Javascript objects one');
console.log('Write a function that takes a string as argument. Create an object that has a property with key "key" and a value equal to the string. Return the object');
console.log(myFunction6('a'));  // expected: {key: 'a'}
console.log(myFunction6('z'));  // expected: {key: 'z'}
console.log(myFunction6('b'));  // expected: {key: 'b'}




function myFunction7(a, b) {
    let obj = {};
    obj[a] = b;
    return obj;
}

console.log('7 Creating Javascript objects two');
console.log('Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key "a" and a value of "b". Return the object');
console.log(myFunction7('a', 'b'));  // expected: {a: 'b'}
console.log(myFunction7('z', 'x'));  // expected: {z: 'x'}
console.log(myFunction7('b', 'w'));  // expected: {b: 'w'}





function myFunction8(a, b) {
    let obj = {};
    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = b[i];
    }
    return obj;
}

console.log('8 Creating Javascript objects three');
console.log('Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys from "a" and corresponding values from "b". Return the object');
console.log(myFunction8(['a', 'b', 'c'], [1, 2, 3]));  // expected: {a: 1, b: 2, c: 3}
console.log(myFunction8(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));  // expected: {w: 10, x: 9, y: 5, z: 2}
console.log(myFunction8([1, 'b'], ['a', 2]));  // expected: {1: 'a', b: 2}




function myFunction9(a) {
    return Object.keys(a);
}

console.log('9 Extract keys from Javascript object');
console.log('Write a function that takes an object (a) as argument. Return an array with all object keys.');
console.log(myFunction9({a: 1, b: 2, c: 3}));  // expected: ['a', 'b', 'c']
console.log(myFunction9({j: 9, i: 2, x: 3, z: 4}));  // expected: ['j', 'i', 'x', 'z']
console.log(myFunction9({w: 15, x: 22, y: 13}));  // expected: ['w', 'x', 'y']





function myFunction10(a) {
    return a?.a?.b;
}

console.log('10 Return nested object property');
console.log('Write a function that takes an object as an argument. In some cases, the object contains other objects with some deeply nested properties. Return the property "b" of object "a" inside the original object if it exists. If not, return undefined.');
console.log(myFunction10({ a: { b: 2 } }));  // expected: 2
console.log(myFunction10({ a: { c: 3 } }));  // expected: undefined
console.log(myFunction10({ a: { b: 'hello' } }));  // expected: 'hello'
console.log(myFunction10({ a: {} }));  // expected: undefined
console.log(myFunction10({}));  // expected: undefined





function myFunction11(a) {
    return Object.values(a).reduce((sum, value) => sum + value, 0);
}

console.log('11 Sum object values');
console.log('Write a function that takes an object (a) as argument. Return the sum of all object values.');
console.log(myFunction11({a: 1, b: 2, c: 3}));  // expected: 6
console.log(myFunction11({j: 9, i: 2, x: 3, z: 4}));  // expected: 18
console.log(myFunction11({w: 15, x: 22, y: 13}));  // expected: 50





function myFunction12(obj) {
    const { b, ...rest } = obj;
    return rest;
}

console.log('12 Remove a property from an object');
console.log('Write a function that takes an object as argument. It should return an object with all original object properties, except for the property with key "b".');
console.log(myFunction12({ a: 1, b: 7, c: 3 }));  // expected: { a: 1, c: 3 }
console.log(myFunction12({ b: 0, a: 7, d: 8 }));  // expected: { a: 7, d: 8 }
console.log(myFunction12({ e: 6, f: 4, b: 5, a: 3 }));  // expected: { e: 6, f: 4, a: 3 }





function myFunction13(x, y) {

    // Исправляем ключ 'b' на 'd' в объекте y
    const correctedY = { ...y, d: y.b }; 
    delete correctedY.b; // Удаляем старый ключ 'b'
    
    // Объединяем объекты x и исправленный y
    return { ...x, ...correctedY };
}

console.log('13 Merge two objects with matching keys');
console.log('Write a function that takes two objects as arguments. Unfortunately, the property \'b\' in the second object has the wrong key. It should be named \'d\' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties \'a\', \'b\', \'c\', \'d\', and \'e\'.');


console.log(myFunction13({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// expected: { a: 1, b: 2, c: 3, e: 5, d: 4 }

console.log(myFunction13({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
// expected: { a: 5, b: 4, c: 3, e: 2, d: 1 }






function myFunction14(a, b) {
  
    // Применяем умножение ко всем значениям объекта a
    const result = {};
    for (const key in a) {
        if (a.hasOwnProperty(key)) {
            result[key] = a[key] * b;
        }
    }
    return result;
}

console.log('14 Multiply all object values by x');
console.log('Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of \'a\' by \'b\'. Return the resulting object.');


console.log(myFunction14({ a: 1, b: 2, c: 3 }, 3));
// expected: { a: 3, b: 6, c: 9 }

console.log(myFunction14({ j: 9, i: 2, x: 3, z: 4 }, 10));
// expected: { j: 90, i: 20, x: 30, z: 40 }

console.log(myFunction14({ w: 15, x: 22, y: 13 }, 6));
// expected: { w: 90, x: 132, y: 78 }



function myFunction15(obj) {
 
    // Новый объект, в котором ключи и значения поменяны местами
    const swappedObj = {};
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            swappedObj[obj[key]] = key;
        }
    }
    
    return swappedObj;
}


console.log('15 Swap object keys and values');
console.log('Write a function that takes an object as argument. Swap the JavaScript object\'s key with its values and return the resulting object.');


console.log(myFunction15({ a: 1, b: 2, c: 3 }));
// expected: { 1: 'a', 2: 'b', 3: 'c' }

console.log(myFunction15({ j: 9, i: 2, x: 3, z: 4 }));
// expected: { 9: 'j', 2: 'i', 3: 'x', 4: 'z' }

console.log(myFunction15({ w: 15, x: 22, y: 13 }));
// expected: { 15: 'w', 22: 'x', 13: 'y' }

