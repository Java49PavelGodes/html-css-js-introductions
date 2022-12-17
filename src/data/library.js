export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.pages = +book.pages;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getBooksbyPagesRange(pageFrom, pageTo) {
        return this.books.filter(b => b.pages >= pageFrom && b.pages < pageTo);
    }
    // getBooksByPages(pagesFrom, pagesTo) {
    //     return this.books.filter(e => e.pages >= pagesFrom && e.pages < pagesTo);
    // }
    getBooksbyAuthor(author) {
        return this.books.filter(b => b.author==author);
    }
    
}