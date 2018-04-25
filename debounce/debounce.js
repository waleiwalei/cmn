function debounce(fn, delay = 300) {
    // 维护一个 timer
    let timer = null;
  
    return function(...args) {
      // 函数的作用域和变量this, args
  
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(this, args);
      }, delay);
    }
}