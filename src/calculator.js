var discounts = require("./all_discounts.js");

function Calculator(books){
    this.books = books;
}

Calculator.prototype.getPermutation = function(){
    var permutation = [];

    this.books.forEach(function(book){
        if(book.count > 0){
            permutation.push(book);
            book.count --;
        }
    });

    return permutation;
}

Calculator.prototype.getDiscountRate = function(permutation){

    var discountType = permutation.length;
    var discountRate = 0;

    for(var i = 0;i < discounts.length; i++){
        if(discounts[i].type === discountType){
            discountRate =  discounts[i].rate;
        }
    }
    return discountRate;
}

Calculator.prototype.getSubTotal = function(permutation){
    var price = permutation[0].price;
    var rate = this.getDiscountRate(permutation);
    var subTotal = price * (1-rate)*permutation.length;
    return subTotal;
}


Calculator.prototype.isSpecialCase = function(permutations){

    var specialCase = permutations.filter(function(val){
        return val.length === 5||val.length ===3;
    });

    if(specialCase.length === 2){
        return true;
    }
}


Calculator.prototype.getSumTotal = function(){
    var Sum = 0;
    var permutations = [];
    do{
        var permutation = this.getPermutation();
        if(permutation.length>0){
            permutations.push(permutation);
            Sum += this.getSubTotal(permutation);
        }
    } while(permutation.length > 0)
    
    if(this.isSpecialCase(permutations)){
        Sum -= 0.4;
    }
    return Sum.toFixed(2);
}

module.exports = Calculator;