document.querySelector('#search').oninput = function() {
    let searchValue = this.value.trim();
    // возможно нужно еще искать по нижнему регистру
    // let searchValueLC = this.value.toLowerCase().trim(); 
    let $bookCard = document.querySelectorAll('.book-card');

    $bookCard.forEach(function(item) {

        if (searchValue !== '') {
            let $bookName = item.querySelector('.book h3');
            if ($bookName.innerText.search(searchValue) === -1) {
                item.classList.add('hide');
                $bookName.innerHTML = $bookName.innerText;
            } else {
                item.classList.remove('hide');
            }
        } else {
            $bookCard.forEach(function(item) {
                item.classList.remove('hide');
            });
        }
    });
};