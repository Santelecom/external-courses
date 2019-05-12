function findUndersrt(strData, undrSrtData){
	var result = false;
	if (typeof strData === 'string'){
		if (strData.indexOf(undrSrtData) > -1) result = true;
	}
	return result;
}

	module.exports = findUndersrt