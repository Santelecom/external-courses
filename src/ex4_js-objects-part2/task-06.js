function upprcaseWord(strData){
	var arrStr = strData.split('');

	arrStr[0] = strData[0].toUpperCase();
	arrStr.forEach(function(item, index){
		if (item === ' '){
			arrStr[index +1] = strData[index +1].toUpperCase();
		}
	})
	arrStr = arrStr.join('');
	return arrStr;
	
}
module.exports = upprcaseWord