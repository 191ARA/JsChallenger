//Dates5.js
//clear
//node Dates5.js

function myFunction1(date1, date2) {
    return date1.getTime() === date2.getTime();
}

console.log('1 Check if two dates are equal');
console.log('Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.');
console.log(myFunction1(new Date('2025-02-06'), new Date('2025-02-06')));  // expected: true
console.log(myFunction1(new Date('2025-02-06'), new Date('2025-02-07')));  // expected: false
console.log(myFunction1(new Date('2025-02-06T10:00:00'), new Date('2025-02-06T10:00:00')));  // expected: true
console.log(myFunction1(new Date('2025-02-06'), new Date('2025-02-06T00:00:00')));  // expected: true




function myFunction2(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // количество миллисекунд в одном дне
    const diffTime = Math.abs(date2 - date1); // разница между датами в миллисекундах
    return Math.floor(diffTime / oneDay); // делим на количество миллисекунд в одном дне
}

console.log('2 Return the number of days between two dates');
console.log('Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.');
console.log(myFunction2(new Date('2025-02-06'), new Date('2025-02-10')));  // expected: 4
console.log(myFunction2(new Date('2025-01-01'), new Date('2025-02-01')));  // expected: 31
console.log(myFunction2(new Date('2025-12-25'), new Date('2025-12-31')));  // expected: 6
console.log(myFunction2(new Date('2025-02-06'), new Date('2025-02-06')));  // expected: 0



function myFunction3(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

console.log('3 Check if two dates fall on the exact same day');
console.log('Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.');
console.log(myFunction3(new Date('2025-02-06'), new Date('2025-02-06')));  // expected: true
console.log(myFunction3(new Date('2025-02-06'), new Date('2025-02-07')));  // expected: false
console.log(myFunction3(new Date('2025-02-06'), new Date('2025-02-06T23:59:59')));  // expected: true
console.log(myFunction3(new Date('2025-02-06'), new Date('2025-01-06')));  // expected: false





function myFunction4(date1, date2) {
    const oneHour = 60 * 60 * 1000; // количество миллисекунд в одном часе
    const diffTime = Math.abs(date2 - date1); // разница между датами в миллисекундах
    return diffTime <= oneHour; // проверяем, меньше ли или равно разнице между датами одному часу
}

console.log('4 Check if two dates are within 1 hour from each other');
console.log('Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.');
console.log(myFunction4(new Date('2025-02-06T10:00:00'), new Date('2025-02-06T10:45:00')));  // expected: true
console.log(myFunction4(new Date('2025-02-06T10:00:00'), new Date('2025-02-06T11:05:00')));  // expected: false
console.log(myFunction4(new Date('2025-02-06T10:00:00'), new Date('2025-02-06T10:59:59')));  // expected: true
console.log(myFunction4(new Date('2025-02-06T10:00:00'), new Date('2025-02-06T12:00:00')));  // expected: false




function myFunction5(a, b) {
    return a < b;
}

console.log('5 Check if one date is earlier than another');
console.log('Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.');
console.log(myFunction5(new Date('2025-02-06'), new Date('2025-02-07')));  // expected: true
console.log(myFunction5(new Date('2025-02-06'), new Date('2025-02-05')));  // expected: false
console.log(myFunction5(new Date('2025-02-06T10:00:00'), new Date('2025-02-06T10:05:00')));  // expected: true
console.log(myFunction5(new Date('2025-02-06T10:00:00'), new Date('2025-02-06T09:59:59')));  // expected: false
