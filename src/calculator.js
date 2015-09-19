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
    var flag5 = false;
    var flag3 = false;

    var specialCase = permutations.forEach(function(val){
        if(val.length === 5){
            flag5 = true;
        }
        else if(val.length === 3){
            flag3 = true;
        }
    });

    return flag5 && flag3;
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