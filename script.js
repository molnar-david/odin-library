let myLibrary = [];
let myLibraryTable = document.getElementById("library");

document.getElementById("add-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const myForm = document.getElementById("add-book-form");
    const formData = new FormData(myForm);
    myForm.reset();

    // Convert 'on' to true and null to false
    const newBook = new Book(formData.get("title"), formData.get("author"), formData.get("is-read") ? true : false);

    // Check if book already in table
    if (myLibrary.some((element) => element.title === newBook.title && element.author === newBook.author)) {
        alert("Book already added!");
    } else {
        if (newBook.title && newBook.author) {
            addBookToLibrary(newBook);
        }
    }
});

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function toggleIsRead(index) {
    let book = myLibrary[index];
    book.isRead = !book.isRead;

    let isReadBtns = document.getElementsByClassName("is-read-btn");
    for (let isReadBtn of isReadBtns) {
        if (isReadBtn.dataset.index === index) {
            isReadBtn.textContent = book.isRead ? "Read" : "Not read";
        }
    }
}

function removeBookFromLibrary(index) {
    myLibraryTable.deleteRow(+index + 1);                // Row 0 is header row in our table
    myLibrary.splice(index, 1);

    let removeBtns = document.getElementsByClassName("remove-btn");
    let isReadBtns = document.getElementsByClassName("is-read-btn");

    // Reassign indices
    let newIndex = 0;
    for (let removeBtn of removeBtns) {
        removeBtn.dataset.index = newIndex++;
    }

    newIndex = 0;
    for (let isReadBtn of isReadBtns) {
        isReadBtn.dataset.index = newIndex++;
    }
}

function addBookToLibrary(book) {
    if (book.title && book.author) {
        let newRow = myLibraryTable.insertRow();
        let title = newRow.insertCell();
        let author = newRow.insertCell();

        let isReadBtn = document.createElement("button");
        isReadBtn.classList.add("is-read-btn");
        isReadBtn.textContent = book.isRead ? "Read" : "Not read";
        isReadBtn.dataset.index = myLibrary.length;
        isReadBtn.addEventListener("click", (event) => toggleIsRead(event.target.dataset.index));

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Remove";
        removeBtn.dataset.index = myLibrary.length;     // data-index
        removeBtn.addEventListener("click", (event) => removeBookFromLibrary(event.target.dataset.index));

        title.appendChild(document.createTextNode(book.title));
        author.appendChild(document.createTextNode(book.author));
        newRow.insertCell().appendChild(isReadBtn);
        newRow.insertCell().appendChild(removeBtn);

        myLibrary.push(book);
    }
}

addBookToLibrary(new Book("title", "author", false));
addBookToLibrary(new Book("The Lord of the Rings", "J. R. R. Tolkien", true));
addBookToLibrary(new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", true));
