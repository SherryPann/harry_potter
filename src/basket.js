function Basket(books){
    this.books = books||[];
}

Basket.prototype.addBook = function(book){
    var that = this;
    var theBook = this.findSameBook(book)
    if(theBook){
        theBook.count++;
    }
    else{
        this.books.push({name:book,count:1});
    }

}

Basket.prototype.findSameBook = function(book){

    for(var i = 0; i < this.books.length;i++){
        if(this.books[i].name === book){
            return this.books[i];
        }
    }
}

module.exports = Basket;