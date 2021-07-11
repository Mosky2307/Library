let addButton = document.querySelector('#add');
let myLibrary = [];

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
console.log(myLibrary[i].info())
    }
};

addButton.addEventListener ('click', () => {});

let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not yet read');
let fantasticMrFox = new Book('Fantastic Mr. Fox', 'Roald Dahl', '96', 'not yet read');

addBookToLibrary(theHobbit);
addBookToLibrary(fantasticMrFox);

bookDisplay();