
function findMax(arrData){
	if (typeof arrData === 'object'){
		var max, index, lengthArrData;
		max = arrData[0];
		for (index = 0; index < arrData.length -1; index++){
			if (arrData[index]> max){
				max = arrData[index]
			}
		}
		
	}
	return(max)	;
}


module.exports = findMax
