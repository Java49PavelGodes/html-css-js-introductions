export class BooksList {
    #listElement;
    constructor(IdList) {
        this.#listElement = document.getElementById(IdList);
    }
    showBooks(books) {
        this.#listElement.innerHTML = getBookItems(books);
    }
}
function getBookItems(books) {
    return books.map (book => 
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Title: ${book.book_title} </p>
                 <p class="books-item-paragraph">Author: ${book.author} </p>
                 <p class="books-item-paragraph">Genre: ${book.genre}</p>
                 <p class="books-item-paragraph">Publishing Date: ${book.publishingDate}</p>
                 <p class="books-item-paragraph">Number of Pages: ${book.pages}</p>
              </div>
          </li>`).join('');
}
  