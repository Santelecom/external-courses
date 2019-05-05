function sliceTwin(array, begin, end) {
    var i = 0,
        newArr = [],
        start = begin,
        finish = end;

    if (!start) {
        start = 0;
    } else if (start < 0) {
        start = array.length + start;
    }

    if (!finish) {
        finish = array.length;
    } else if (finish < 0) {
        finish = array.length + finish;
    }

    for (start; start < finish; start++) {
        newArr[i] = array[start];
        i++;
    }

    return newArr;
}


module.exports = sliceTwin;