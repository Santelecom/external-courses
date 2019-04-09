function findKey(strData, objData) {
	for (var key in objData) {
		if (key === strData) {
			return true;
		}
	}
	return false;
}

module.exports = findKey