import { Library } from "./data/company.js";
const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_YEAR = 1980;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const ACTIVE = "active"



const dateErrorElement = document.getElementById("date_error");
const pagesErrorElement = document.getElementById("pages_error");
const pagesFormErrorElement = document.getElementById("pages_form_error");
const booksListElement = document.getElementById("books-all");
const booksPagesListElement = document.getElementById("books-pages");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */
//functions of Company


const library = new Library();
//functions of Book Form
function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book)
    library.addBook(book);
    
}
function onChange(event) {

    if (event.target.name == "pages") {
        validatePages(event.target)
    } else if (event.target.name == "publishDate") {
        validatePublishDate(event.target);
    }
}
function validatePages(element) {
    const value = +element.value;
    if (value < MIN_PAGES || value > MAX_PAGES) {
        const message = value < MIN_PAGES ? `pages must be ${MIN_PAGES} or greater`
            : `pages must be ${MAX_PAGES} or less`;
        showErrorMessage(element, message, pagesErrorElement);
    }

}
function validatePublishDate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() {
    return new Date().getFullYear();
}
/************************************************************* */

/********************************************************************************** */

//functions of Pages Form

let pagesFrom = 50;
let pagesTo = 2000;
function onSubmitPages(event) {
    event.preventDefault();
    const books = library.getBooksByPages(pagesFrom, pagesTo);
    booksPagesListElement.innerHTML = getBookItems(books);


   
}
function onChangePagesFrom(event) {
    const value = +event.target.value;
    if (pagesTo && value >= pagesTo) {
        showErrorMessage(event.target, "Pages 'from' must be less than Pages 'to'",
        pagesFormErrorElement);
    } else {
        pagesFrom = value;
    }
}
function onChangePagesTo(event) {
    const value = +event.target.value;
    if (pagesFrom && value < pagesFrom) {
        showErrorMessage(event.target, "Pages 'To' must be greater than Pages 'From'",
        pagesFormErrorElement);
    }
    pagesTo = value;
}
function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
}
function getBookItems(books) {
    return books.map (e => 
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Name: ${e.book_name} </p>
                 <p class="books-item-paragraph">Author: ${e.author} </p>
                 <p class="books-item-paragraph">Genre: ${e.genre}</p>
                 <p class="books-item-paragraph">Publish Date: ${e.publishDate}</p>
                 <p class="books-item-paragraph">Page: ${e.pages}</p>
              </div>
          </li>`).join('');
}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.showSection = showSection;
window.onChangePagesTo = onChangePagesTo;
window.onChangePagesFrom = onChangePagesFrom;
window.onSubmitPages = onSubmitPages;