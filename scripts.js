let i = 2;
let newBook = document.querySelector('#new-book');
let myLibrary = ["test","test2"];
let cardTitle = document.querySelector('.title');
let cardAuthor = document.querySelector('.author');
let cardPages = document.querySelector('.pages');
let cardStatus = document.querySelector('.status');
let libraryNode = document.querySelector('.library');
let bodyBackground = document.querySelector('body');
let toggleCardStatus = document.querySelectorAll('.toggle-status')

let bgCycle = ['images/lib1.jpg', 'images/lib2.jpeg', 'images/lib3.jpg',
               'images/lib4.jpg', 'images/lib5.jpeg', 'images/lib6.jpg'];

let randomNumber = Math.floor(Math.random() * bgCycle.length);

let bgImg = 'url(' + bgCycle[randomNumber] + ')';
bodyBackground.style.backgroundImage = bgImg;

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = "No";
}

function addBookToLibrary(book){
  myLibrary.push(book)
}

function clickFunction() {
  let id = i; 
  let newCard = document.createElement('div');
  let newTitle = document.createElement('div');
  let newAuthor = document.createElement('div');
  let newPages = document.createElement('div');
  let newStatus = document.createElement('div');
  let newToggle = document.createElement('label');
  let newCheckmark = document.createElement('span');
  let newCheckbox = document.createElement('input');

  newCard.classList.add(`card${id}`);
  newTitle.classList.add(`title${id}`);
  newAuthor.classList.add(`author${id}`);
  newPages.classList.add(`pages${id}`);
  newStatus.classList.add(`status${id}`);
  newToggle.classList.add(`toggle-status${id}`);
  newCheckmark.classList.add(`checkmark${id}`);
  newCheckbox.setAttribute('type',`checkbox`);


  let title = prompt("enter title here", "title");
  let author = "By " + prompt("enter author here", "author");
  let pages = prompt("enter # of pages here", "pages");

  let book = new Book(id, title, author, pages);

  addBookToLibrary(book);

  newTitle.textContent = book.title;
  newAuthor.textContent = book.author;
  newPages.textContent = book.pages;
  newToggle.textContent = "Read"


  libraryNode.appendChild(newCard);
  newCard.appendChild(newTitle);
  newCard.appendChild(newAuthor);
  newCard.appendChild(newPages);
  newToggle.appendChild(newCheckbox);
  newToggle.appendChild(newCheckmark);
  newStatus.appendChild(newToggle);
  newCard.appendChild(newStatus);


  i=++i;
}

newBook.addEventListener('click', clickFunction);
