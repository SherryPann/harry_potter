var Book = require("../src/book.js");

describe('Book',function(){
    var book;

    beforeEach(function(){

        book = new Book('harry', 2);

    });

    describe('constructor',function(){

        it('should have name and count as paramters',function(){

            expect(book.name).toBe('harry');
            expect(book.count).toBe(2);
            expect(book.price).toBe(8);

        });
    });
})