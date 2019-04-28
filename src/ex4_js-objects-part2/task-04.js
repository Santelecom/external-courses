function upprcaseFirstSymbol(srtData) {
    var newStr;
    if (typeof srtData === 'string') {
        var arrStr, firstSimbol;

        firstSimbol = srtData[0].toUpperCase();
        arrStr = srtData.split('');
        arrStr[0] = firstSimbol;
        newStr = arrStr.join('');

    }
    return newStr;
}

module.exports = upprcaseFirstSymbol