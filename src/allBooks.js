var Book = require(./book.js);

function loadAllBooks(){
    return [
        new Book("Harry Potter and the Philosopher's Stone"),
        new Book("Harry Potter and the Chamber of Secrets"),
        new Book("Harry Potter and the Prisoner of Azkaban"),
        new Book("Harry Potter and the Goblet of Fire"),
        new Book("Harry Potter and the Order of Phoenix")
    ]
}

module.exports = loadAllBooks();