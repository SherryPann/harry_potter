var Calculator = require("./calculator.js");

function Basket(books){
    this.books = books||[];
}

Basket.prototype.findSameBook = function(addBook){

    for(var i = 0; i < this.books.length;i++){
        if(this.books[i].name === addBook.name){
            return this.books[i];
        }
    }
    return false;
}

Basket.prototype.addBook = function(addBook){
    
    var theBook = this.findSameBook(addBook);

    if(theBook){
        theBook.count++;
    }
    else{
        this.books.push(addBook);
    }
}

module.exports = Basket;