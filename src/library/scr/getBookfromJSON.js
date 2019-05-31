var xhr = new XMLHttpRequest();
var bookUrl = 'https://rsu-library-api.herokuapp.com/books';
xhr.open('GET', bookUrl, false);
xhr.send();
var dataJson;
if (xhr.status !== 200) {
    alert(xhr.status + ': ' + xhr.statusText);
} else {
    dataJson = xhr.responseText;
}

data = JSON.parse(dataJson);

function devBooks(arrBooks) {
    let arrBookOut = document.getElementById("books");
    arrBookOut.innerHTML = '';
    for (let i = 0; i < arrBooks.length; i++) {
        arrBookOut.appendChild(setBook(arrBooks[i]))
    }
    return arrBookOut;
};

// Шаблон HTML для книги
function setBook(arrBook) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    let book = document.createElement('div');
    book.classList.add('book');
    // book.id = arrBook[id];
    bookCard.appendChild(book);

    let bookImg = document.createElement('div');
    bookImg.classList.add('book-image');
    book.appendChild(bookImg);

    let imgBook = document.createElement('img');
    bookImg.appendChild(imgBook);
    imgBook.src = arrBook.image_url;

    let bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    book.appendChild(bookInfo);

    let title = document.createElement('h3');
    bookInfo.appendChild(title);
    title.innerHTML = arrBook.title;

    let bookAutor = document.createElement('div');
    bookAutor.classList.add('book-autor');
    bookInfo.appendChild(bookAutor);
    bookAutor.innerHTML = arrBook.author.firstName + ' ' + arrBook.author.lastName;

    let bookRating = document.createElement('div');
    bookRating.classList.add('rating');
    bookInfo.appendChild(bookRating);

    let starActive = arrBook.rating;

    for (var i = 0; i < 5; i++) {
        let star = document.createElement('i');
        star.setAttribute('star-number', i + 1);
        star.classList.add('fa');
        star.classList.add('fa-star');
        star.classList.add('rating-star');
        if (starActive > 0) {
            star.classList.add('active');
        }
        if (i === arrBook.rating - 1) {
            star.classList.add('current-active');
        }
        starActive--;
        bookRating.appendChild(star);
    }
    return bookCard;
}

// Парсинг
devBooks(data);