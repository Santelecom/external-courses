function typeOut(data) {
	switch (typeof data) {
		case 'string': return 'string';
		case 'number':
			if (isNaN(data)) {
				break;
			} else return 'number';
		default: return undefined;	
	}
	return undefined;
}
module.exports = typeOut 
