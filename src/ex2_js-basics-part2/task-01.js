function typeOut (data){
	var typeData;
	var type = typeof(data);
	if (type === 'number') {
		typeData = 'number';
	} 
	else {
		if (type === 'string'){
			typeData = 'string';
		} 
		else {
			typeData = undefined;
		}
	}
	return typeData;
}


module.exports = typeOut