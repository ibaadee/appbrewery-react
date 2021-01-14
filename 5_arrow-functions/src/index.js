import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const map = numbers.map(x => x * 2);
console.log(map);

//Filter - Create a new array by keeping the items that return true.
const filter = numbers.filter(num =>  num < 10);
console.log(filter);

//Reduce - Accumulate a value by doing something to each item in an array.
var reduce = numbers.reduce((accumulator, currentNumber) =>  accumulator + currentNumber)
console.log(reduce);

////Find - find the first item that matches from an array.
const find = numbers.find(num => num > 10)
console.log(find);

////FindIndex - find the index of the first item that matches.
const findIndex = numbers.findIndex(num => num > 10)
console.log(findIndex);

//Emojipedia - substring meaning
const emojipediaSubstring = emojipedia.map(x => x.meaning.substring(0,100))
console.log(emojipediaSubstring);
