function countEvenOdd(arrData) {
	var zero = odd = even = 0;
	for (var i = 0; i <= arrData.length -1; i++) {
		if (typeof arrData[i] === 'number'){
			if (arrData[i] === 0) {
				zero++;
			} else {
				if (arrData[i] % 2 === 0 && arrData[i] % 2 !== null) {
					even++;
				} else {
					odd++;
				}
			}

		}
	}
	return [even, odd, zero]
}

module.exports = countEvenOdd