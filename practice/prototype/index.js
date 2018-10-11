//[https://segmentfault.com/a/1190000014405410]
/**
 * 1-工厂模式
 */

function Person(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.getName = function() {
        return obj.name;
    }
    return obj;
}
var person = Person('name', 'age');
/**
 * @ 构造函数
 * function Person(name, age){
 *     this.name = name;
 *     this.age = age;
 * }
 * 
 * var person = new Person('name', 'age');
 * 
 * @实际原理
 * @构造函数func
 * var obj = Object.create(func.prototype);
 * var objTemp = func.call(obj);
 * if(typeof objTemp == 'Object') {
 *     return objTemp;
 * } else {
 *     return obj;
 * }
 */

/**
 * 2-单例模式
 */
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}

var A = (function() {
    var obj = null;
    return function(name) {
        if(!obj) {
            obj = new Person(name);
        } 
        return obj;
    }
})();

var a = A('test');
var b = A('test2');
a === b;


/**
 * 3-沙箱模式
 */

var Box = (function () {
    function A(){}
    function B(){}
    return {
        A: A,
        B: B
    }
})();
var box = Box;

/**
 * 4-发布订阅模式
 */
var obj = {};
var fnCb = [];  //回调数组

obj.triggerSend = function() {
    for(var i in fnCb) {
        fnCb[i].apply(this, arguments);
    }
}
obj.listen = function(fn) {
    fnCb.push(fn);
}

obj.listen(function(a, b) {
    console.log(a + b);
})

obj.listen(function(a, b) {
    console.log(a - b);
})

obj.triggerSend(1,2);
//3
//-1


/**
 * 1-原型链继承
 * @不能实现多继承
 */

function Animal(type) {
    this.type = type;

    this.getType1 = function() {
        return this.type + 'Animal';
    }
}

Animal.prototype.getType2 = function() {
    return this.type + 'AnimalPrototype';
}

function Cat() {

}
Cat.prototype = new Animal('cat');
var cat = new Cat();
cat.type;
cat.getType1();
cat.getType2();

/**
 * 2-构造继承
 * @调用父类构造函数-apply，call
 * @可以实现多继承，但不能获得原型方法属性
 */
//Animal定义同上
function Animal() {}
Animal.prototype.getType2=function(){}

function Cat() {
    Animal.call(this);
}
var cat = new Cat();

/**
 * 3-实例继承
 * @不能实现多继承，每次都生成新对象
 */

function Cat(name) {
    var animal = new Animal();
    animal.xxx = xxx;
    return animal;
}

/**
 * 4-拷贝继承
 * @拷贝父类属性，方法[浅拷贝]
 * @占内存，可多继承！！！
 */
function Cat(name){
    var animal = new Animal();
    for(var p in animal){
      Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'Tom';
}

/**
 * 5-组合继承
 */

function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

/**
 * 6-寄生组合继承
 */

function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
(function(){
// 创建一个没有实例方法的类
var Super = function(){};
Super.prototype = Animal.prototype;
//将实例作为子类的原型
Cat.prototype = new Super();
})(); 

/**
 * 7-extend
 */
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
  
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }   
}   