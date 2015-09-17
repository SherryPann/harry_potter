var Book = require("./book.js");

function BasketBook(name,count){

    this.name = name;
    this.count = count||1;

}

BasketBook.prototype.getPrice = function(){

    var book = new Book(this.name);
    return book.price;

}

module.exports = BasketBook;