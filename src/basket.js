var discounts = require("./all_discounts.js");

function Basket(books){
    this.books = books||[];
}

Basket.prototype.addBook = function(addBook){
    var that = this;
    var theBook = this.findSameBook(addBook)
    if(theBook){
        theBook.count++;
    }
    else{
        this.books.push({book:addBook,count:1});
    }
}

Basket.prototype.findSameBook = function(addBook){

    for(var i = 0; i < this.books.length;i++){
        if(this.books[i].name === addBook.name){
            return this.books[i];
        }
    }
}

Basket.prototype.getSumTotal = function(){
    var Sum = 0;
    do{
        var permutation = this.getPermutation();
        if(permutation.length>0){
            var price  = permutation[0].getPrice();
            var rate = this.getDiscountRate(permutation);
            Sum +=  price*(1-rate)*permutation.length;
        }
    } while(permutation.length > 0)

    return Sum.toFixed(2);
}


Basket.prototype.getPermutation = function(){
    var permutation = [];

    this.books.forEach(function(book){
        if(book.count > 0){
            permutation.push(book);
            book.count --;
        }
    });

    return permutation;
}

Basket.prototype.getDiscountRate = function(permutation){
    var discountType = permutation.length;
    var discountRate = 0;

    for(var i = 0;i < discounts.length; i++){
        if(discounts[i].type === discountType){
            discountRate =  discounts[i].rate;
        }
    }

    return discountRate;
}


module.exports = Basket;