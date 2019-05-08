function cutString(srtData, numberData) {
    var newStr = srtData;
    if (typeof srtData === 'string') {
        var strLenght, arrStr;
        strLenght = newStr.length;
        if (strLenght > numberData) {
            arrStr = srtData.split('');

            var newArr = arrStr.slice(0, numberData - 1);
            newArr[numberData] = '…'
            newStr = newArr.join('');

        }

    }
    return newStr;
}

module.exports = cutString