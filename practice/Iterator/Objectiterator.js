//构造函数
function Obj(value) {
    this.value = value;
    this.next = null;
}

//方案一：原型上绑定
Obj.prototype[Symbol.iterator] = function () {
    var iterator = { next: next };
    var current = this;

    function next() {
        if(current) {
            var value = current.value;
            current = current.next;
            return {
                value: value,
                done: false
            }
        } else {
            return {
                done: true
            }
        }
    }

    return iterator;
}

var obj1 = new Obj(1);
var obj2 = new Obj(2);
var obj3 = new Obj(3);

obj1.next = obj2;
obj2.next = obj3;

for(var i of obj1) {
    console.log(i);
}

//方案二：对象中加该属性
var obj = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
        var cur = this;
        var index = 0;
        return {
            next: function() {
                if(index < cur.data.length) {
                    console.log('index:', cur.data[index]);
                    return {
                        value: cur.data[index++],
                        done: false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

