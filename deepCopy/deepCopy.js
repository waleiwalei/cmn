//复制函数
var deal = (obj = {},objRet = {}) => {
    for(var item in obj) {
        if(obj.hasOwnProperty(item)) {
            if(typeof obj[item] != 'object') {
                objRet[item] = obj[item];
            } else {
                objRet[item] = Array.isArray(obj[item]) ? [] : {};
                deal(obj[item], objRet[item]);
            }
        }
    }
}