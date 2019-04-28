var obj = Object.create({ a: 1, d: 2, f: 4 });
obj.b = 2;

function findPropInProto(prop, objData) {
    for (var key in objData) {
        if (!objData.hasOwnProperty(key) && key === prop) {
            return objData[key];
        }
    }
    return undefined;
}

module.exports = findPropInProto