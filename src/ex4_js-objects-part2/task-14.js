
function randomMinMax(min, max){
	var result;
	result = Math.round(Math.random() * (max - min) + min);
	return result	
}

module.exports = randomMinMax