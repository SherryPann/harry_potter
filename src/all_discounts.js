var Discount = require("./discount.js");

function loadAllDiscounts(){
    return [
        new Discount('2 different 5% discount',0.05),
        new Discount('3 different 10% discount',0.1),
        new Discount('4 different 20% discount',0.2),
        new Discount('5 different 25% discount',0.25)
    ]
}

module.exports = loadAllDiscounts();