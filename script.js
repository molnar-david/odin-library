let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book("title", "author", 69, false));
addBookToLibrary(new Book("The Lord of the Rings", "J. R. R. Tolkien", 1178, true));
addBookToLibrary(new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", 223, true));

console.table(myLibrary);
