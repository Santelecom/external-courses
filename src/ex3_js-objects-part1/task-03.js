
function findKey(strData, objData){
	var inObj = false;
	for (var key in objData){
		if (key === strData){
			inObj = true;
		}
	}
	return inObj;
}

module.exports = findKey