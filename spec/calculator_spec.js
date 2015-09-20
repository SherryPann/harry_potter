var Calculator = require("../src/calculator");
var Book = require("../src/book.js");

describe("Calculator",function(){

        var books = [new Book('harryOne',2),new Book("harryTwo",3)];

        describe("getSumtotal",function(){

            it("should return sumtotal after best discount",function(){
                var books = [new Book('harryOne',2), new Book("harryTwo",3)];

                var calculator = new Calculator(books);

                var sumTotal = calculator.getSumTotal();

                expect(sumTotal).toEqual("38.40");
            });

            it("should return the sumtotal $8.00 of one book",function(){

                var books = [new Book("harryOne",1)];

                var calculator = new Calculator(books);

                var sumTotal = calculator.getSumTotal();

                expect(sumTotal).toEqual("8.00");
            });

            it("should return the sumTotal $16.00 of two same books",function(){

                var books = [new Book("harryOne",2)];

                var calculator = new Calculator(books);

                var sumTotal = calculator.getSumTotal();

                expect(sumTotal).toEqual("16.00");
            });

            it("should return the sumTotal $15.20",function(){

                var books = [new Book("harryOne",1),new Book("harryTwo",1)];

                var calculator = new Calculator(books);

                var sumTotal = calculator.getSumTotal();

                expect(sumTotal).toEqual("15.20");

            });
            it("should return the sumTotal $51.2",function(){

                var books = [new Book("harryOne",2),new Book("harryTwo",2),new Book("harryThree",2),new Book("harryFour",1),new Book("harryFive",1)];

                var calculator = new Calculator(books);

                expect(calculator.getSumTotal()).toEqual("51.20");
            })
        });
})