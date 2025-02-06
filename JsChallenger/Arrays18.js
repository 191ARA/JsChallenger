//Arrays18.js
//clear
//node Arrays18.js


function myFunction1(a, n) {
    return a[n - 1];
}

console.log('1 Get nth element of array');
console.log('Write a function that takes an array (a) and a value (n) as argument. Return the nth element of "a"');
console.log(myFunction1([1, 2, 3, 4, 5], 2));  // expected: 2
console.log(myFunction1(['apple', 'banana', 'cherry'], 1));  // expected: 'apple'
console.log(myFunction1([10, 20, 30, 40], 4));  // expected: 40
console.log(myFunction1([5, 10, 15], 3));  // expected: 15



function myFunction2(a) {
    return a.slice(3);
}

console.log('2 Remove first 3 elements of array');
console.log('Write a function that takes an array (a) as argument. Remove the first 3 elements of "a". Return the result');
console.log(myFunction2([1, 2, 3, 4, 5]));  // expected: [4, 5]
console.log(myFunction2(['apple', 'banana', 'cherry', 'date']));  // expected: ['date']
console.log(myFunction2([10, 20, 30, 40, 50]));  // expected: [40, 50]
console.log(myFunction2([5, 10, 15, 20]));  // expected: [20]




function myFunction3(a) {
    return a.slice(-3);
}

console.log('3 Get last 3 elements of array');
console.log('Write a function that takes an array (a) as argument. Extract the last 3 elements of "a". Return the resulting array');
console.log(myFunction3([1, 2, 3, 4, 5]));  // expected: [3, 4, 5]
console.log(myFunction3(['apple', 'banana', 'cherry', 'date']));  // expected: ['cherry', 'date']
console.log(myFunction3([10, 20, 30, 40, 50]));  // expected: [30, 40, 50]
console.log(myFunction3([5, 10, 15, 20]));  // expected: [15, 20]



function myFunction4(a) {
    return a.slice(0, 3);
}

console.log('4 Get first 3 elements of array');
console.log('Write a function that takes an array (a) as argument. Extract the first 3 elements of "a". Return the resulting array');
console.log(myFunction4([1, 2, 3, 4, 5]));  // expected: [1, 2, 3]
console.log(myFunction4(['apple', 'banana', 'cherry', 'date']));  // expected: ['apple', 'banana', 'cherry']
console.log(myFunction4([10, 20, 30, 40, 50]));  // expected: [10, 20, 30]
console.log(myFunction4([5, 10, 15, 20]));  // expected: [5, 10, 15]




function myFunction5(a, n) {
    return a.slice(-n);
}

console.log('5 Return last n array elements');
console.log('Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of "a"');
console.log(myFunction5([1, 2, 3, 4, 5], 2));  // expected: [4, 5]
console.log(myFunction5(['apple', 'banana', 'cherry', 'date'], 3));  // expected: ['banana', 'cherry', 'date']
console.log(myFunction5([10, 20, 30, 40, 50], 4));  // expected: [20, 30, 40, 50]
console.log(myFunction5([5, 10, 15, 20], 1));  // expected: [20]




function myFunction6(a, b) {
    return a.filter(item => item !== b);
}

console.log('6 Remove a specific array element');
console.log('Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to "b" from the array. Return the filtered array');
console.log(myFunction6([1, 2, 3, 4, 5], 3));  // expected: [1, 2, 4, 5]
console.log(myFunction6(['apple', 'banana', 'cherry', 'apple'], 'apple'));  // expected: ['banana', 'cherry']
console.log(myFunction6([10, 20, 30, 40, 50], 20));  // expected: [10, 30, 40, 50]
console.log(myFunction6([5, 10, 15, 20], 15));  // expected: [5, 10, 20]



function myFunction7(a) {
    return a.length;
}

console.log('7 Count number of elements in JavaScript array');
console.log('Write a function that takes an array (a) as argument. Return the number of elements in "a"');
console.log(myFunction7([1, 2, 3, 4, 5]));  // expected: 5
console.log(myFunction7(['apple', 'banana', 'cherry']));  // expected: 3
console.log(myFunction7([10, 20, 30, 40, 50]));  // expected: 5
console.log(myFunction7([5, 10, 15, 20]));  // expected: 4




function myFunction8(a) {
    return a.filter(item => item < 0).length;
}

console.log('8 Count number of negative values in array');
console.log('Write a function that takes an array of numbers as argument. Return the number of negative values in the array');
console.log(myFunction8([1, -2, 3, -4, 5]));  // expected: 2
console.log(myFunction8([-1, -2, -3, -4]));  // expected: 4
console.log(myFunction8([10, 20, 30, -40, -50]));  // expected: 2
console.log(myFunction8([5, 10, 15, 20]));  // expected: 0



function myFunction9(a) {
    return a.sort();
}

console.log('9 Sort an array of strings alphabetically');
console.log('Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result');
console.log(myFunction9(['banana', 'apple', 'cherry', 'date']));  // expected: ['apple', 'banana', 'cherry', 'date']
console.log(myFunction9(['dog', 'cat', 'elephant', 'bear']));  // expected: ['bear', 'cat', 'dog', 'elephant']
console.log(myFunction9(['zebra', 'antelope', 'lion', 'giraffe']));  // expected: ['antelope', 'giraffe', 'lion', 'zebra']
console.log(myFunction9(['kiwi', 'orange', 'banana', 'apple']));  // expected: ['apple', 'banana', 'kiwi', 'orange']




function myFunction10(a) {
    return a.sort((x, y) => y - x);
}

console.log('10 Sort an array of numbers in descending order');
console.log('Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order');
console.log(myFunction10([1, 5, 3, 9, 2]));  // expected: [9, 5, 3, 2, 1]
console.log(myFunction10([10, 30, 20, 50, 40]));  // expected: [50, 40, 30, 20, 10]
console.log(myFunction10([100, 200, 300, 50, 25]));  // expected: [300, 200, 100, 50, 25]
console.log(myFunction10([5, 10, 15, 20]));  // expected: [20, 15, 10, 5]




function myFunction11(a) {
    return a.reduce((sum, num) => sum + num, 0);
}

console.log('11 Calculate the sum of an array of numbers');
console.log('Write a function that takes an array of numbers as argument. It should return the sum of the numbers');
console.log(myFunction11([1, 2, 3, 4, 5]));  // expected: 15
console.log(myFunction11([10, 20, 30]));  // expected: 60
console.log(myFunction11([100, 200, 300, 400]));  // expected: 1000
console.log(myFunction11([5, 10, 15]));  // expected: 30





function myFunction12(a) {
    const sum = a.reduce((sum, num) => sum + num, 0);
    return sum / a.length;
}

console.log('12 Return the average of an array of numbers');
console.log('Write a function that takes an array of numbers as argument. It should return the average of the numbers');
console.log(myFunction12([1, 2, 3, 4, 5]));  // expected: 3
console.log(myFunction12([10, 20, 30]));  // expected: 20
console.log(myFunction12([100, 200, 300, 400]));  // expected: 250
console.log(myFunction12([5, 10, 15]));  // expected: 10




function myFunction13(a) {
    return a.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

console.log('13 Return the longest string from an array of strings');
console.log('Write a function that takes an array of strings as argument. Return the longest string');
console.log(myFunction13(['apple', 'banana', 'cherry', 'date']));  // expected: 'banana'
console.log(myFunction13(['dog', 'elephant', 'cat', 'hippopotamus']));  // expected: 'hippopotamus'
console.log(myFunction13(['kiwi', 'orange', 'pineapple']));  // expected: 'pineapple'
console.log(myFunction13(['car', 'plane', 'train']));  // expected: 'plane'




function myFunction14(a) {
    return a.every(item => item === a[0]);
}

console.log('14 Check if all array elements are equal');
console.log('Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise');
console.log(myFunction14([1, 1, 1, 1]));  // expected: true
console.log(myFunction14([10, 10, 10, 10]));  // expected: true
console.log(myFunction14([1, 2, 1, 1]));  // expected: false
console.log(myFunction14(['apple', 'apple', 'apple']));  // expected: true





function myFunction15(...arrays) {
    return [].concat(...arrays);
}

console.log('15 Merge an arbitrary number of arrays');
console.log('Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays');
console.log(myFunction15([1, 2], [3, 4], [5, 6]));  // expected: [1, 2, 3, 4, 5, 6]
console.log(myFunction15(['apple', 'banana'], ['cherry', 'date'], ['elderberry']));  // expected: ['apple', 'banana', 'cherry', 'date', 'elderberry']
console.log(myFunction15([10, 20], [30, 40], [50]));  // expected: [10, 20, 30, 40, 50]
console.log(myFunction15([5], [10], [15, 20]));  // expected: [5, 10, 15, 20]



function myFunction16(a) {
    return a.sort((x, y) => x.b - y.b);
}

console.log('16 Sort array by object property');
console.log('Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array');
console.log(myFunction16([{b: 3}, {b: 1}, {b: 2}]));  // expected: [{b: 1}, {b: 2}, {b: 3}]
console.log(myFunction16([{b: 10}, {b: 5}, {b: 15}]));  // expected: [{b: 5}, {b: 10}, {b: 15}]
console.log(myFunction16([{b: 7}, {b: 3}, {b: 9}]));  // expected: [{b: 3}, {b: 7}, {b: 9}]
console.log(myFunction16([{b: 2}, {b: 4}, {b: 1}]));  // expected: [{b: 1}, {b: 2}, {b: 4}]




function myFunction17(a, b) {
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

console.log('17 Merge two arrays with duplicate values');
console.log('Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array');
console.log(myFunction17([1, 2, 3], [2, 3, 4]));  // expected: [1, 2, 3, 4]
console.log(myFunction17([10, 20, 30], [20, 30, 40]));  // expected: [10, 20, 30, 40]
console.log(myFunction17([5, 15, 25], [15, 35, 25]));  // expected: [5, 15, 25, 35]
console.log(myFunction17([100, 200], [200, 300, 100]));  // expected: [100, 200, 300]





function myFunction18(a, b) {
    return a.filter(item => item > b).reduce((sum, num) => sum + num, 0);
}

console.log('18 Sum up all array elements with values greater than');
console.log('Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum');
console.log(myFunction18([1, 2, 3, 4, 5], 3));  // expected: 9 (4 + 5)
console.log(myFunction18([10, 20, 30, 40], 25));  // expected: 70 (30 + 40)
console.log(myFunction18([100, 200, 300, 50], 150));  // expected: 500 (200 + 300)
console.log(myFunction18([5, 10, 15], 10));  // expected: 15 (15)


