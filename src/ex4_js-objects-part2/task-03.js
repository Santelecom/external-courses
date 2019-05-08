function delSpace(srtData) {
    var newStr;
    if (typeof srtData === 'string') {
        var arrStr, firstSpase, lastSpase;

        firstSpase = srtData.indexOf(' ');
        lastSpase = srtData.lastIndexOf(' ');
        arrStr = srtData.split('');
        arrStr.splice(lastSpase, 1);
        arrStr.splice(firstSpase, 1);
        newStr = arrStr.join('');
    }
    return newStr;
}

module.exports = delSpace