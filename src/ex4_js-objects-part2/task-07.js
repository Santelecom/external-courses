function cutString(srtData, numberData){

	if (typeof srtData === 'string'){		
		var strLenght, newStr, arrStr
		newStr = srtData;
		strLenght = newStr.length;
		if (strLenght > numberData){
			arrStr = srtData.split('');

			var newArr = arrStr.slice(0,numberData-1);
			newArr[numberData] = '…'
			newStr = newArr.join('');

		}

	}
	return newStr;
}

module.exports = cutString