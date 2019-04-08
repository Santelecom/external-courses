

function copyObj(objData) {
	var objDataCpoy = {};
	for (var key in objData) {
		if (objData.hasOwnProperty(key)) {
			objDataCpoy[key] = objData[key];
		}
	}


	return objDataCpoy;
}

module.exports = copyObj