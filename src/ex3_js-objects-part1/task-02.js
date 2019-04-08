function printObjKey(objData) {
	for (var key in objData) {
		if (objData.hasOwnProperty(key)) {
			console.log(key + ': ' + objData[key]);
		}
	}
	return
}
module.exports = printObjKey


