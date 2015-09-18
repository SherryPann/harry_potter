var Basket = require("./basket.js");
var Book = require("./book.js");

function getSumTotal(inputs){

    var sum = 0;
    var basket = new Basket();

    inputs.forEach(function(input){
        var addBook = new Book(input);
        basket.addBook(addBook);
    });

    sum = basket.getSumTotal();
    console.log(sum);

}

module.exports = getSumTotal;
