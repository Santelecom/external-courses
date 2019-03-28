

function deepCopyObj(objData) {
	var objDataCopy = {};

	for (var key in objData) {
		if (typeof objData[key] !== 'object') {
			objDataCopy[key] = objData[key];
		}
		else {
			if (Array.isArray(objData[key])) {
				objDataCopy[key] = objData[key].slice();
				for (var index = 0; index < objDataCopy[key].length - 1; index++) {
					objDataCopy[key] = deepCopyObj(objData[key]);
				}
			} else {
				objDataCopy[key] = deepCopyObj(objData[key]);
			}
		}
	}
	return objDataCopy;
}

module.exports = deepCopyObj


