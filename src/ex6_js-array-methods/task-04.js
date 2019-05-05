function filterTwin(array, callback) {
    var newArray = [],
        indexNA = 0;
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray[indexNA] = array[i];
            indexNA++;
        }
    }
    return newArray;
}

module.exports = filterTwin;