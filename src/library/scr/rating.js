// rating star
function setRating(book) {
    for (let i = 0; i < book.length; i++) {
        var $rating = book[i].querySelector('.rating');
        $rating.onclick = function(e) {
            var target = e.target;
            let $ratingItem = book[i].querySelectorAll('.rating-star');
            if (target.classList.contains('fa-star')) {
                removeClass($ratingItem, 'current-active')
                target.classList.add('active', 'current-active');
                data[i].rating = target.getAttribute('star-number');
            }
        }

        $rating.onmouseover = function(e) {
            var target = e.target;
            $ratingItem = book[i].querySelectorAll('.rating-star');

            if (target.classList.contains('rating-star')) {
                removeClass($ratingItem, 'active');
                target.classList.add('active');
                mouseOverActiveClass($ratingItem);
            }
        }

        $rating.onmouseout = function() {
            addClass($ratingItem, 'active');
            mouseOutActiveClas($ratingItem);
        }
    }
}

var $book = document.querySelectorAll('.book');
setRating($book);

function removeClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        for (var j = 1; j < arguments.length; j++) {
            $ratingItem[i].classList.remove(arguments[j]);
        }
    }
}

function addClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        for (var j = 1; j < arguments.length; j++) {
            $ratingItem[i].classList.add(arguments[j]);
        }
    }
}


function mouseOverActiveClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
        if (arr[i].classList.contains('active')) {
            break;
        } else {
            arr[i].classList.add('active');
        }
    }
}

function mouseOutActiveClas(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
        if (arr[i].classList.contains('current-active')) {
            break;
        } else {
            arr[i].classList.remove('active');
        }
    }
}