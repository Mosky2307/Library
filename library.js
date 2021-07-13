let body = document.querySelector('#body');
let formHolder = document.querySelector('#formHolder');
let form = document.querySelector('#form');
let bookTotal = document.querySelector('#bookTotal');
let booksRead = document.querySelector('#booksRead')
let booksUnread = document.querySelector('#booksUnread')
let submit = document.querySelector('#submit')
let display = document.querySelector('#Display');
let addButton = document.querySelector('#add');
let myLibrary = [];
let formA = document.querySelector('#formA');
let formB = document.querySelector('#formB');
let formC = document.querySelector('#formC');
let checkbox = document.querySelector('#checkbox');


let booksReadCount = 0;
let booksUnreadCount = 2;

bookTotal.textContent = `${myLibrary.length} books in your library`
booksRead.textContent = '0 Books Read'
booksUnread.textContent = '2 Books Unread'



//This function is played when the user submits book info
class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${name} by ${author}, ${pages} pages, ${read}`;
        };
    }
};

  //This function is played when the user submits book info
  function addBookToLibrary(book) {
myLibrary.push(book)
bookDisplay()
bookTotal.textContent = `${myLibrary.length} books in your library`
};



//This function appends a book card to the library
function bookDisplay() {
let bookName = document.createElement('div');
let authorName = document.createElement('div');
let pageNum = document.createElement('div');
let readYet = document.createElement('div');
let book = document.createElement('div');
let blah = `${myLibrary.length - 1}`
book.id = `book${myLibrary.length - 1}`
if (myLibrary.length % 3 === 0) {
    book.style.backgroundColor = 'blue'
} else if ((myLibrary.length + 1) % 3 === 0) {
    book.style.backgroundColor = 'salmon'
} else {
    book.style.backgroundColor = 'green'
};
book.style.fontFamily = 'Arial'
book.appendChild(bookName);
bookName.textContent = `${myLibrary[myLibrary.length -1].name}`;
book.appendChild(authorName);
authorName.textContent = `${myLibrary[myLibrary.length -1].author}`;
book.appendChild(pageNum);
pageNum.textContent = `${myLibrary[myLibrary.length -1].pages} pages`;
book.appendChild(readYet);
readYet.textContent = `${myLibrary[myLibrary.length -1].read}`;
let remove = document.createElement('button');
remove.id = 'remove';

//This is the remove button

remove.addEventListener ('click', () => {
if (readYet.textContent === "Read") {
booksReadCount --;
booksRead.textContent = `${booksReadCount} Books Read`
} else {
booksUnreadCount --;
booksUnread.textContent = `${booksUnreadCount} Books Unread`
}
display.removeChild(book);
myLibrary.pop();
bookTotal.textContent = `${myLibrary.length} books in your library`;

})
remove.textContent = "-"
book.appendChild(remove);
let toggle = document.createElement('button');
toggle.id = 'toggle';

//This is the toggle button

toggle.addEventListener ('click', () => {
    if (readYet.textContent === "Read") {
        readYet.textContent = "Not yet read";
        booksReadCount--;
        booksUnreadCount++;
        booksRead.textContent = `${booksReadCount} Books Read`
        booksUnread.textContent = `${booksUnreadCount} Books Unread`
    } else {
        readYet.textContent = "Read"
        booksReadCount++;
        booksUnreadCount--;
        booksRead.textContent = `${booksReadCount} Books Read`
        booksUnread.textContent = `${booksUnreadCount} Books Unread`
    }
})

book.appendChild(toggle);

display.appendChild(book);
book.classList.add('book');
};

//This is the add function, it pulls up a form
addButton.addEventListener ('click', () => {
formHolder.style.visibility = "visible";
});

//This is the submit function, it creates a book based on the user input
submit.addEventListener ('click', () => {
    let a = formA.value;
    let b = formB.value;
    let c = formC.value;
    if (c === "" || b === "" || a === "") {}
    else {
    if (checkbox.checked === true) {
let d = "Read"
let newBook = new Book(a, b, c, d);
addBookToLibrary(newBook);
booksReadCount += 1;
booksRead.textContent = `${booksReadCount} Books Read`
    } else {
        let d = 'Not yet read'
        let newBook = new Book(a, b, c, d);
        addBookToLibrary(newBook);
       booksUnreadCount += 1;
       booksUnread.textContent = `${booksUnreadCount} Books Unread`
    };
    formHolder.style.visibility = "hidden";}
    });

    



let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not yet read');
let fantasticMrFox = new Book('Fantastic Mr. Fox', 'Roald Dahl', '96', 'Not yet read');

addBookToLibrary(theHobbit);
addBookToLibrary(fantasticMrFox);

