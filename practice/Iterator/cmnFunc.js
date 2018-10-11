//将对象转换成map
function objToMap(obj) {
    var map = new Map();
    for(var k of Object.keys(obj)){
        map.set(k, obj[k]);
    }
    return map;
}