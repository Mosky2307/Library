let body = document.querySelector('#body');
let display = document.querySelector('#Display');
let addButton = document.querySelector('#add');
let myLibrary = [];
let formHolder = document.querySelector('#formHolder');


body.removeChild(formHolder);

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read 
   this.info = function() {
       return `${name} by ${author}, ${pages} pages, ${read}`}     
  };

  function addBookToLibrary(book) {
myLibrary.push(book)
};

function bookDisplay() {
    for (let i = 0; i < myLibrary.length; i++) {
 let bookName = document.createElement('div');
let authorName = document.createElement('div');
let pageNum = document.createElement('div');
let readYet = document.createElement('div');
let book = document.createElement('div');
book.appendChild(bookName);
bookName.textContent = `${myLibrary[i].name}`;
book.appendChild(authorName);
authorName.textContent = `${myLibrary[i].author}`;
book.appendChild(pageNum);
pageNum.textContent = `${myLibrary[i].pages} pages`;
book.appendChild(readYet);
readYet.textContent = `${myLibrary[i].read}`;
display.appendChild(book);
book.classList.add('book');
;
    }
};

addButton.addEventListener ('click', () => {
    body.appendChild(formHolder);
});


let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not yet read');
let fantasticMrFox = new Book('Fantastic Mr. Fox', 'Roald Dahl', '96', 'Not yet read');

addBookToLibrary(theHobbit);
addBookToLibrary(fantasticMrFox);

bookDisplay();