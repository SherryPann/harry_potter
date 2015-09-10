var Basket = require("../src/basket.js");

describe("Basket",function(){
    var basket;
    var books = [{name:'harryOne',count:2},{name:"harryTwo",count:3}];

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
           var books = [{name:'harryOne',count:3},{name:"harryTwo",count:3}];

           basket.addBook('harryOne');
           expect(basket.books).toEqual(books);
       });
    });
})