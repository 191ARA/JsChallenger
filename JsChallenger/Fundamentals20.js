//Fundamentals20.js
//clear
//node Fundamentals20.js

function myFunction1(a, b) {
    return a + b;
}

console.log('1 Sum two numbers');
console.log('Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result');
console.log(myFunction1(1, 2));  // expected: 3 
console.log(myFunction1(1, 10)); // expected: 11 
console.log(myFunction1(99, 1)); // expected: 100


function myFunction2(a, b) {
    return a === b;
}

console.log('2 Comparison operators, strict equality');
console.log('Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type');
console.log(myFunction2(1, 1));  // expected: true
console.log(myFunction2(1, '1')); // expected: false
console.log(myFunction2('1', '1')); // expected: true
console.log(myFunction2(true, 1)); // expected: false


function myFunction3(a) {
    return typeof a;
}

console.log('3 Get type of value');
console.log('Write a function that takes a value as argument. Return the type of the value');
console.log(myFunction3(1));  // expected: number
console.log(myFunction3('string'));  // expected: string 
console.log(myFunction3(true));  // expected: boolean
console.log(myFunction3([]));  // expected: object
console.log(myFunction3({}));  // expected: object
console.log(myFunction3(undefined));  // expected: undefined


function myFunction4(a, n) {
    return a[n - 1];
}

console.log('4 Get nth character of string');
console.log('Write a function that takes a string (a) and a number (n) as argument. Return the nth character of "a"');
console.log(myFunction4('hello', 2));  // expected: 'e'
console.log(myFunction4('world', 5));  // expected: 'd'
console.log(myFunction4('javascript', 4));  // expected: 'a'
console.log(myFunction4('programming', 10));  // expected: 'g'


function myFunction5(a) {
    return a.slice(3);
}

console.log('5 Remove first n characters of string');
console.log('Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result');
console.log(myFunction5('hello'));  // expected: 'lo'
console.log(myFunction5('world'));  // expected: 'ld'
console.log(myFunction5('javascript'));  // expected: 'script'
console.log(myFunction5('programming'));  // expected: 'amming'


function myFunction6(a) {
    return a.slice(-3);
}

console.log('6 Get last n characters of string');
console.log('Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result');
console.log(myFunction6('hello'));  // expected: 'llo'
console.log(myFunction6('world'));  // expected: 'rld'
console.log(myFunction6('javascript'));  // expected: 'ipt'
console.log(myFunction6('programming'));  // expected: 'ing'


function myFunction7(a) {
    return a.slice(0, 3);
}

console.log('7 Get first n characters of string');
console.log('Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result');
console.log(myFunction7('hello'));  // expected: 'hel'
console.log(myFunction7('world'));  // expected: 'wor'
console.log(myFunction7('javascript'));  // expected: 'jav'
console.log(myFunction7('programming'));  // expected: 'pro'


function myFunction8(a) {
    return a.indexOf('is');
}

console.log('8 Find the position of one string in another');
console.log('Write a function that takes a string as an argument. The string contains the substring "is". Return the index of "is".');
console.log(myFunction8('this is a test'));  // expected: 2
console.log(myFunction8('hello world'));  // expected: -1
console.log(myFunction8('island'));  // expected: 0
console.log(myFunction8('mississippi'));  // expected: 1


function myFunction9(a) {
    return a.slice(0, Math.floor(a.length / 2));
}

console.log('9 Extract first half of string');
console.log('Write a function that takes a string (a) as argument. Extract the first half of a. Return the result');
console.log(myFunction9('hello'));  // expected: 'he'
console.log(myFunction9('world'));  // expected: 'wo'
console.log(myFunction9('javascript'));  // expected: 'java'
console.log(myFunction9('programming'));  // expected: 'prog'


function myFunction10(a) {
    return a.slice(0, -3);
}

console.log('10 Remove last n characters of string');
console.log('Write a function that takes a string (a) as an argument. Remove the last 3 characters of a. Return the result');
console.log(myFunction10('hello'));  // expected: 'he'
console.log(myFunction10('world'));  // expected: 'wor'
console.log(myFunction10('javascript'));  // expected: 'javas'
console.log(myFunction10('programming'));  // expected: 'program'



function myFunction11(a, b) {
    return (a * b) / 100;
}

console.log('11 Return the percentage of a number');
console.log('Write a function that takes two numbers (a and b) as argument. Return b percent of a');
console.log(myFunction11(100, 20));  // expected: 20
console.log(myFunction11(200, 50));  // expected: 100
console.log(myFunction11(150, 10));  // expected: 15
console.log(myFunction11(500, 25));  // expected: 125



function myFunction12(a, b, c, d, e, f) {
    return Math.pow(((a + b - c) * d) / e, f);
}

console.log('12 Basic JavaScript math operators');
console.log('Write a function that takes 6 values (a, b, c, d, e, f) as arguments. Sum a and b. Then subtract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.');
console.log(myFunction12(2, 3, 1, 4, 2, 2));  // expected: 64
console.log(myFunction12(10, 5, 3, 2, 2, 3));  // expected: 1728
console.log(myFunction12(1, 1, 1, 1, 1, 1));  // expected: 1
console.log(myFunction12(7, 3, 2, 5, 2, 2));  // expected: 400



function myFunction13(a, b) {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

console.log('13 Check whether a string contains another string and concatenate');
console.log('Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation.');
console.log(myFunction13('hello', 'ell'));  // expected: 'ellhello'
console.log(myFunction13('world', 'orl'));  // expected: 'worldorl'
console.log(myFunction13('javascript', 'script'));  // expected: 'scriptscript'
console.log(myFunction13('programming', 'java'));  // expected: 'programmingjava'




function myFunction14(a) {
    return a % 2 === 0;
}

console.log('14 Check if a number is even');
console.log('Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false');
console.log(myFunction14(4));  // expected: true
console.log(myFunction14(7));  // expected: false
console.log(myFunction14(10));  // expected: true
console.log(myFunction14(15));  // expected: false





function myFunction15(a, b) {
    return (b.split(a).length - 1);
}

console.log('15 How many times does a character occur?');
console.log('Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.');
console.log(myFunction15('a', 'banana'));  // expected: 3
console.log(myFunction15('o', 'hello world'));  // expected: 2
console.log(myFunction15('e', 'apple pie'));  // expected: 2
console.log(myFunction15('z', 'hello world'));  // expected: 0





function myFunction16(a) {
    return Number.isInteger(a);
}

console.log('16 Check if a number is a whole number');
console.log('Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.');
console.log(myFunction16(4));  // expected: true
console.log(myFunction16(4.5));  // expected: false
console.log(myFunction16(10));  // expected: true
console.log(myFunction16(7.99));  // expected: false



function myFunction17(a, b) {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

console.log('17 Multiplication, division, and comparison operators');
console.log('Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value');
console.log(myFunction17(4, 2));  // expected: 8
console.log(myFunction17(10, 20));  // expected: 0.5
console.log(myFunction17(3, 3));  // expected: 9
console.log(myFunction17(7, 10));  // expected: 0.7




function myFunction18(a) {
    return Math.round(a * 100) / 100;
}

console.log('18 Round a number to 2 decimal places');
console.log('Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number');
console.log(myFunction18(4.5678));  // expected: 4.57
console.log(myFunction18(10.345));  // expected: 10.35
console.log(myFunction18(7.999));  // expected: 8.0
console.log(myFunction18(15.1));  // expected: 15.1


function myFunction19(a) {
    return a.toString().split('').map(Number);
}

console.log('19 Split a number into its digits');
console.log('Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array.');
console.log(myFunction19(12345));  // expected: [1, 2, 3, 4, 5]
console.log(myFunction19(9876));  // expected: [9, 8, 7, 6]
console.log(myFunction19(2001));  // expected: [2, 0, 0, 1]
console.log(myFunction19(5));  // expected: [5]






function myFunction20(a, b, c) {
    return a.replace(/[^a-zA-Z]/g, '') + b.replace(/[^a-zA-Z]/g, '') + c.replace(/[^a-zA-Z]/g, '');
}

console.log('20 Clear up the chaos behind these strings');
console.log('Write a function that joins these strings together such that they form the following words: "Javascript", "Countryside", and "Downtown". You might want to apply basic JS string methods such as replace(), split(), slice() etc.');
console.log(myFunction20('Ja-va', 'coun-try', 'down-town'));  // expected: 'JavascriptCountrysideDowntown'
console.log(myFunction20('Jav-a', 'coun-try-side', 'do-wnt-ow-n'));  // expected: 'JavascriptCountrysideDowntown'
console.log(myFunction20('Java', 'cou-ntry', 'downtown'));  // expected: 'JavascriptCountrysideDowntown'