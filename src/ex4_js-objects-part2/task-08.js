function lowerCamelCase(srtData){

	var arrStr, newStr, upSimbol,subArr, lower;		

	function upCase(data){
		upSimbol = data[0].toUpperCase();
		subArr = data.split('');
		upSimbol = subArr[0].toUpperCase();
		subArr[0] = upSimbol;
		subArr = subArr.join('');
		return subArr;
	}

	function lowCase(data){
		var lower = data.toLowerCase();
		return lower;
	}


	arrStr = srtData.split(' ');

	arrStr.forEach(function(item, index){
		arrStr[index] = lowCase(item);
		if (index > 0){
			arrStr[index] = upCase(arrStr[index]);
		}
	})

	arrStr = arrStr.join('');
	return arrStr;
}

module.exports = lowerCamelCase