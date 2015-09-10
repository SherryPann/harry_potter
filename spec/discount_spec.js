var Discount = require("../src/discount.js");
describe("Discount",function(){
    it("should have type and rate as parameters",function(){
        var discount = new Discount('2 different 10% discount',0.1);
        expect(discount.type).toBe('2 different 10% discount');
        expect(discount.rate).toBe(0.1);
    });
})