var Discount = require("./discount.js");

function loadAllDiscounts(){

    return [
        new Discount( 2, 0.05),
        new Discount( 3, 0.1),
        new Discount( 4, 0.2),
        new Discount( 5, 0.25)
    ]
}

module.exports = loadAllDiscounts();