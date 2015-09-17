var Basket = require("./basket.js");
var Basket_Book = require("./basket_book.js");

function getSumTotal(inputs){

    var sum = 0;
    var basket = new Basket();

    inputs.forEach(function(input){
        var addBook = new Basket_Book(input);
        basket.addBook(addBook);
    });

    sum = basket.getSumTotal();
    console.log(sum);

}

module.exports = getSumTotal;