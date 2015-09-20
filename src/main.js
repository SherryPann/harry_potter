var Basket = require("./basket.js");
var Book = require("./book.js");
var Calculator = require("./calculator.js");

function getSumTotal(inputs){

    var sum = 0;
    var basket = new Basket();

    inputs.forEach(function(input){
        var addBook = new Book(input);
        basket.addBook(addBook);
    });

    var calculator = new Calculator(basket.books);

    sum = calculator.getSumTotal();
    console.log(sum);

}

module.exports = getSumTotal;
