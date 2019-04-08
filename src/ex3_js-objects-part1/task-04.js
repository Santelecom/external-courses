function findKey(strData, objData){
	var found =0, objBuffer = {};
	for (var key in objData){
		if (key === strData){
			found++;
		}	
	}
	if(found === 0){	
		objBuffer = objData;
		objBuffer[strData] = 'new';	
}
return objBuffer;
}

module.exports = findKey

