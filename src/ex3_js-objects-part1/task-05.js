

function copyObj(objData){
	var objDataCpoy = {};
	for (var key in objData){
		if (typeof objData ==='object'){	
			objDataCpoy[key] = objData[key];
		}	
	}


	return objDataCpoy;
}

module.exports = copyObj