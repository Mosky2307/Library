let body = document.querySelector('#body');
let formHolder = document.querySelector('#formHolder');
let form = document.querySelector('#form')

let submit = document.querySelector('#submit')
let display = document.querySelector('#Display');
let addButton = document.querySelector('#add');
let myLibrary = [];
let formA = document.querySelector('#formA');
let formB = document.querySelector('#formB');
let formC = document.querySelector('#formC');
let radio = document.querySelector('#radio')


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
bookDisplay()
myLibrary = [];
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
formHolder.style.visibility = "visible";
});

submit.addEventListener ('click', () => {
    let a = formA.value;
    let b = formB.value;
    let c = formC.value;
    if (radio.checked = true) {
let d = "Read"
let newBook = new Book(a, b, c, d);
addBookToLibrary(newBook);
    } else {
        let d = 'Not yet read'
        let newBook = new Book(a, b, c, d);
        addBookToLibrary(newBook);
       
    };
    formHolder.style.visibility = "hidden";
    });




let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not yet read');
let fantasticMrFox = new Book('Fantastic Mr. Fox', 'Roald Dahl', '96', 'Not yet read');

addBookToLibrary(theHobbit);
addBookToLibrary(fantasticMrFox);

