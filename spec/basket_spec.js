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

        it("should return the sumtotal $8.00 of one book",function(){
            var books = [new Basket_Book("harryOne",1)];
            basket = new Basket(books);
            var sumTotal = basket.getSumTotal();
            expect(sumTotal).toEqual("8.00");
        });

        it("should return the sumTotal $16.00 of two same books",function(){
            var books = [new Basket_Book("harryOne",2)];
            basket = new    Basket(books);
            var sumTotal = basket.getSumTotal();
            expect(sumTotal).toEqual("16.00");
        });

        it("should return the sumTotal $15.20",function(){
            var books = [new Basket_Book("harryOne",1),new Basket_Book("harryTwo",1)];
            basket = new    Basket(books);
            var sumTotal = basket.getSumTotal();
            expect(sumTotal).toEqual("15.20");

        })
    });
})