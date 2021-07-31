function Book(title, auther, isbn) {
    this.title = title;
    this.auther = auther;
    this.isbn = isbn;
}

function UI() {


}

UI.prototype.clearField = function () {

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

UI.prototype.showAlert = function (message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    container.insertBefore(div, document.querySelector('#book-form'));

    setTimeout(function () {

        document.querySelector('.alert').remove();
    }, 3000);
}


UI.prototype.addBookToList = function (book) {

    const tableBody = document.getElementById('book-list');

    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.auther}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class=delete>X</a></td>`;


    tableBody.appendChild(tr);


}

UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {

        target.parentElement.parentElement.remove();
    }
}


document.getElementById('book-form').addEventListener('submit', (e) => {

    const title = document.getElementById('title').value;
    const auther = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, auther, isbn);

    const ui = new UI();


    if (title === "" ||
        auther === "" || isbn === "") {

        ui.showAlert('pls fill in all field ', 'error');

    } else {

        ui.addBookToList(book);
        ui.showAlert('Book added successfully ', 'success');
        ui.clearField();
    }


    e.preventDefault();
});



document.getElementById('book-list').addEventListener('click', (e) => {




    const ui = new UI();

    ui.deleteBook(e.target);
    ui.showAlert('Book removed successfully ', 'success');

    e.preventDefault();
});
