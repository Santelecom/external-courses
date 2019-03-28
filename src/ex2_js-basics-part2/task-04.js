function isSameData(arrData){
	var compare = true;		
		for (var index = 1; index <= arrData.length -1; index++){
			if (arrData[index] !== arrData[0]){
				compare = false;
			}
		}
	return	compare;
}

module.exports = isSameData