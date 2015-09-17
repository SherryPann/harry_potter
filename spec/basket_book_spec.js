var BasketBook = require("../src/basket_book.js");

describe('BasketBook',function(){
    var basketBook;

    beforeEach(function(){

        basketBook = new BasketBook('harry',2);

    });

    describe('constructor',function(){

        it('should have name and count as paramters',function(){

            expect(basketBook.name).toBe('harry');
            expect(basketBook.count).toBe(2);

        });
    });

    describe("getPrice",function() {

        it("should return the certain price 8 of a book", function () {

            expect(basketBook.getPrice()).toBe(8);

        });
    });

})