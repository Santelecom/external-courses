
function reverseString(strData){
	var result;

	result = strData.split('');
	result.reverse();
	result = result.join('');
	
	return result;
}

module.exports = reverseString