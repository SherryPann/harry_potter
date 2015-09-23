'use strict';

var Basket = require("./src/basket.js");
var Book = require("./src/book.js");
var Calculator = require("./src/calculator.js");
var inputArray = require("./src/inputArray.js");

function getSumTotal(){
    var basket = new Basket();

    inputArray.forEach(function(input){
        var addBook = new Book(input);
        basket.addBook(addBook);
    });

    var calculator = new Calculator();

    var sum = calculator.getSumTotal(basket.books);
    console.log("The sum is $" + sum + '.');
}

getSumTotal();