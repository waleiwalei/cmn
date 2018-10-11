function aToo(obj) {
    if(Array.isArray(obj)) {
        let obj2 = Object.keys(obj).reduce((res, item, i , arr)=>{
            res[item] = obj[item];
            return res;
        }, {});
        obj2.length = obj.length;
        return obj2;
    } else {
        return obj;
    }
}
// console.log(aToo([1,4,6]));

/**
 * obj->arr
 * @param  {any} obj 
 * @return {void}
 */
function oToa(obj) {
    if(typeof obj == 'object' && obj.length != undefined) {
        return Object.keys(obj).reduce((res, item, i, arr)=>{
            if(item > -1) {
                res[item] = obj[item];
            }
            return res;
        }, []);
    } else {
        return obj;
    }
}

// console.log(oToa({0: 0, 1: 1, length: 2}));
