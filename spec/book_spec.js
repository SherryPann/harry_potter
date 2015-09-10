var Book = require("../src/book.js");
describe("Book",function(){
    it("should have name  and price as parameters",function(){
        var book = new Book('harry');
        expect(book.name).toBe('harry');
        expect(book.price).toBe(8);
    });
})