var Book = require("./book.js");

function loadAllBooks(){
    return [
        new Book("HarryPotterOne"),
        new Book("HarryPotterTwo"),
        new Book("HarryPotterThree"),
        new Book("HarryPotterFour"),
        new Book("HarryPotterFive")
    ]
}

module.exports = loadAllBooks();