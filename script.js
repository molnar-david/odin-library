let myLibrary = [];
let myLibraryTable = document.getElementById("library");

document.getElementById("add-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById("add-book-form"));

    const newBook = new Book(formData.get("title"), formData.get("author"), formData.get("is-read") ? true : false);    // convert 'on' to true and null to false

    // check if book already in table
    if (myLibrary.some((element) => element.title === newBook.title && element.author === newBook.author)) {
        alert("Book already added!");
    } else {
        addBookToLibrary(newBook);
    }
});

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    if (book.title && book.author) {
        myLibrary.push(book);

        let newRow = myLibraryTable.insertRow();
        let title = newRow.insertCell();
        let author = newRow.insertCell();
        let isRead = newRow.insertCell();
        title.appendChild(document.createTextNode(book.title));
        author.appendChild(document.createTextNode(book.author));
        isRead.appendChild(document.createTextNode(book.isRead ? "Read" : "Not read"));
    }
}

addBookToLibrary(new Book("title", "author", false));
addBookToLibrary(new Book("The Lord of the Rings", "J. R. R. Tolkien", true));
addBookToLibrary(new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", true));
