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

Basket.prototype.getSumTotal = function(){
    var Sum = 0;

    var calculator = new Calculator(this.books);
    Sum = calculator.getSumTotal();

    return Sum;
}

module.exports = Basket;