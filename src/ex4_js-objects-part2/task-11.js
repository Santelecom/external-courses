
function countSymbol(strData){
	var nextReg, counter

	function countWord(str, simbol){
		var counter = 0;
		for (var i = 0; i < str.length; i++) {
			if (simbol === str[i]) {
				++counter;
			}
		}		
		console.log(simbol + ': ' + counter);
		return counter;
	}


	for (var i = 0; i < strData.length; i++) {
		nextReg = strData.indexOf(strData[i], i+1);
		if (nextReg < 0){
			countWord(strData, strData[i]);	
		}
	}

	return 
}

module.exports = countSymbol