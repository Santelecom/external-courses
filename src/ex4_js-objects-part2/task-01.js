

var obj = Object.create({a: 1, d:2, f:4});
obj.b = 2;


function findPropInProto(prop, objData){
	var protoProperty;

	for (var key in objData.__proto__){

		if (key === prop){
			protoProperty = objData.__proto__[key];
// почему нельзя через точку?
//			protoProperty = objData.__proto__.key;

//			console.log('выводим' + objData.__proto__[key]);
//			console.log(objData.__proto__[key]);
}
}
return protoProperty;

}


module.exports = findPropInProto