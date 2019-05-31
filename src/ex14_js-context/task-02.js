function Hangman(word) {
    // var word;

    start(word);


    this.guess = function(letter) {
        if (errorsLeft <= 0) {
            console.log("You lose");
            return this;
        }

        if (word.indexOf(letter) > -1) {
            guessedString = guessedString.split('');
            var letterInWord = word.split('');
            for (var i = 0; i < letterInWord.length; i++) {
                if (letter === letterInWord[i]) {
                    guessedString[i] = letterInWord[i];
                    notGuessedString--;
                }
            }
            guessedString = guessedString.join('');

            if (notGuessedString === 0) {
                console.log(guessedString + '| You won!');
            } else {
                console.log(guessedString);
            }

        }

        if (word.indexOf(letter) === -1) {
            errorsLeft--;
            wrongSymbols.push(letter);
            console.log(`wrong letter, errors left ${errorsLeft} | ${wrongSymbols}`);
        }

        return this;
    }

    this.getGuessedString = function() {
        return guessedString;
    }

    this.getErrorsLeft = function() {
        return errorsLeft;
    }

    this.getWrongSymbols = function() {
        return wrongSymbols;
    }


    this.getStatus = function() {
        return `${guessedString} | errors left ${errorsLeft}`;
    }

    this.startAgain = function(newWord) {
        start(newWord);
    }

    function start(newWord) {
        var word = newWord;
        guessedString = [];
        notGuessedString = word.length;
        errorsLeft = 6;
        wrongSymbols = [];

        guessedString = '_'.repeat(newWord.length);
    }

}

var hangman = new Hangman('webpurple');

module.exports = hangman;