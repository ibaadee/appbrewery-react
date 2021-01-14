import emojipedia from './emojipedia';

var numbers = [3, 56, 2, 48, 5];

//Map - Create a new array by doing something with each item in an array.
const map = numbers.map(function x(num){
    return num * 2
}) 
console.log("MAP " + map)


//Filter - Create a new array by keeping the items that return true.
const filter = numbers.filter(function x(num){
    return num > 10 
})
console.log(filter);

//Reduce - Accumulate a value by doing something to each item in an array.
const reduce = numbers.reduce(function (accumulator, currentNumber){
    return accumulator + currentNumber;
})
console.log(reduce);

//Find - find the first item that matches from an array.
const find = numbers.find(function (num){
    return num > 10
})
console.log(find);

//FindIndex - find the index of the first item that matches.
const findIndex = numbers.findIndex(function (num){
    return num > 10
})
console.log(findIndex);

//emojipedia substring
const emojipediaSubstring = emojipedia.map(function (arr){
    return arr.meaning.substring(0, 100);
})
console.log(emojipediaSubstring);