function printObjKey(objData){
	
	for (var key in objData){
		if (typeof objData === 'object'){
			console.log (key + ': '+ objData[key]);
		}
	}
	return
}
module.exports = printObjKey


