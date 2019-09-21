var foo = (function(){
    var modules = [];
    function define(name, arr, func) {
        for(var i = 0; i < arr.length; i ++) {
            arr[i] = modules[arr[i]];
        }
        // 这种写法可以确保调用func时this指向函数本身
        // modules[name] = func.apply(func, arr);
        modules[name] = func(arr);
    }
    function get(name) {
        return modules[name];
    }
    return {
        define: define,
        get: get
    }
})();

foo.define('foo', ['bar'], function () {
    function hello(name) {
        return name;
    }
    return {
        hello: hello
    }
});

console.log(foo.get('foo').hello('test'));