function simpleNumber(data){
	if ((typeof data === 'number') && (data >=2) && (data <= 1000) ){
		var deliver, deliverCount, result;
		deliver = 2;
		deliverCount = 1;
		for (deliver; deliver < data; deliver++){
			if ((deliver !== data) && (data % deliver === 0) ){
				deliverCount++;
			}
		}
		if (deliverCount === 1){
			result = 'Число ' + data + ' - простое число';
		}
		else {
			result = 'Число ' + data + ' - составное число';
		}


	}
	else {
		result = 'Данные неверны';
	}

	return result;
}

module.exports = simpleNumber
