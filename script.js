let myLibrary = [];
let myLibraryTable = document.getElementById("library");

document.getElementById("add-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById("add-book-form"));

    // Convert 'on' to true and null to false
    const newBook = new Book(formData.get("title"), formData.get("author"), formData.get("is-read") ? true : false);

    // Check if book already in table
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

function removeBookFromLibrary(index) {
    myLibraryTable.deleteRow(+index + 1);                // Row 0 is header row in our table
    myLibrary.splice(index, 1);

    let removeBtns = document.getElementsByClassName("remove-btn");

    // Reassign indices
    let newIndex = 0;
    for (let removeBtn of removeBtns) {
        removeBtn.dataset.index = newIndex++;
    }
    console.log(removeBtns);
}

function addBookToLibrary(book) {
    if (book.title && book.author) {
        let newRow = myLibraryTable.insertRow();
        let title = newRow.insertCell();
        let author = newRow.insertCell();
        let isRead = newRow.insertCell();

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Remove";
        removeBtn.dataset.index = myLibrary.length;     // data-index
        removeBtn.addEventListener("click", (event) => removeBookFromLibrary(event.target.dataset.index));

        title.appendChild(document.createTextNode(book.title));
        author.appendChild(document.createTextNode(book.author));
        isRead.appendChild(document.createTextNode(book.isRead ? "Read" : "Not read"));
        newRow.insertCell().appendChild(removeBtn);

        myLibrary.push(book);
    }
}

addBookToLibrary(new Book("title", "author", false));
addBookToLibrary(new Book("The Lord of the Rings", "J. R. R. Tolkien", true));
addBookToLibrary(new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", true));
