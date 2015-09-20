var Basket = require("../src/basket.js");
var Book = require("../src/book.js");

describe("Basket",function(){

    var basket;
    var books = [new Book('harryOne', 2),new Book("harryTwo", 3)];

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
           basket.addBook(new Book('harryOne', 1));

           expect(basket.books).toEqual([new Book('harryOne', 3),new Book("harryTwo", 3)]);
       });
    });

})
