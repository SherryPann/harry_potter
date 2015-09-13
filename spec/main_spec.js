var getSumTotal = require("../src/main.js");

describe("getSumTotal",function(){
    it("should get the correct sum total after best discounts",function(){
        spyOn(console, 'log');
        var inputs = ['HarryOne','HarryOne','HarryOne','HarryTwo','HarryTwo','HarryTwo'];
        var sum = getSumTotal(inputs);
        expect(console.log).toHaveBeenCalledWith("45.60");
    });
})