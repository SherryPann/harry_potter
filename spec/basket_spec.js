var Basket = require("../src/basket.js");
var Basket_Book = require("../src/basket_book.js");

describe("Basket",function(){
    var basket;
    var books = [new Basket_Book('harryOne',2),new Basket_Book("harryTwo",3)];
    beforeEach(function(){
        basket = new Basket(books);
    });

    describe("constructor",function(){
        it("shoud have books as parameters",function(){
            expect(basket.books).toBe(books);
        });
    });

    describe("addBook",function(){
       it("can add book to books",function(){
           basket.addBook(new   Basket_Book('harryOne',1));
           expect(basket.books).toEqual([new Basket_Book('harryOne',3),new Basket_Book("harryTwo",3)]);
       });
    });

    describe("getSumtotal",function(){
        it("should return sumtotal after best discount",function(){
            var books = [new  Basket_Book('harryOne',2), new  Basket_Book("harryTwo",3)];
            basket = new Basket(books);
            var sumTotal = basket.getSumTotal();
            expect(sumTotal).toEqual("38.40");
        });
    });
})