function insertString(strData, insertSrt, wordNum){
	var result = strData.split(' ');
	result.splice(wordNum + 1, 0, insertSrt);
	return result.join(' ');
}

module.exports = insertString