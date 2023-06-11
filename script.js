let myLibrary = [];
let myLibraryTable = document.getElementById("library");

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    let newRow = myLibraryTable.insertRow();
    let title = newRow.insertCell();
    let author = newRow.insertCell();
    let isRead = newRow.insertCell();
    title.appendChild(document.createTextNode(book.title));
    author.appendChild(document.createTextNode(book.author));
    isRead.appendChild(document.createTextNode(book.isRead ? "Read" : "Not read"));
}

addBookToLibrary(new Book("title", "author", false));
addBookToLibrary(new Book("The Lord of the Rings", "J. R. R. Tolkien", true));
addBookToLibrary(new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", true));
