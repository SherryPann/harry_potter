var Discount = require("../src/discount.js");

describe("Discount",function(){

    it("should have type and rate as parameters",function(){

        var discount = new Discount(3, 0.1);

        expect(discount.type).toBe(3);
        expect(discount.rate).toBe(0.1);

    });

})