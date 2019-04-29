function reduceTwin(array, callback, initialValue) {
    var previousValue, i;
    if (initialValue) {
        previousValue = initialValue;
        i = 0;
    } else {
        previousValue = array[0];
        i = 1;
    }

    for (i; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array)
    }

    return previousValue;
}

module.exports = reduceTwin;