// Сортировка: все книги  =========================
document.getElementById('allBooks').onclick = function() {
    // clearBooks();
    devBooks(data);
    setRating(document.querySelectorAll('.book'));
};


// Сортировка: бесплатный =========================
function getFreeBooks(arrBook) {
    let freeBooks = arrBook.filter(function(item) {
        return item.cost < 200;
    });
    return freeBooks;
};

let $freeBooks = document.getElementById('freebook');

$freeBooks.onclick = function() {
    // clearBooks();
    devBooks(getFreeBooks(data));
    setRating(document.querySelectorAll('.book'));
};


// Сортировка: самый популярный  =========================
function getMostPopular(arrBook) {
    let mostPopular = arrBook.filter(function(item) {
        return item.rating === 5;
    });
    return mostPopular;
};

let $mostPopular = document.getElementById('mostpopular');

$mostPopular.onclick = function() {
    // clearBooks();
    devBooks(getMostPopular(data));
    setRating(document.querySelectorAll('.book'));
};



// Сортировка: последние добавленные ============================
function compareAge(personA, personB) {
    return personA.age - personB.age;
}
data.sort(compareAge);

// Сортировка: по дате добавление по возрастанию ============================
let $mostRecent = document.getElementById('mostrecent');
$mostRecent.onclick = function() {
    data.sort(function(i1, i2) {
        return i1.createdAt - i2.createdAt
    })
    devBooks((data));
    setRating(document.querySelectorAll('.book'));
};