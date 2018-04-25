>debounce函数防抖：

· 防止频繁发生的事情重复执行回调

· 例如->输入框中的文字需要等待结束后再校验

· 原理->每次执行的匿名function都会讲前一个操作的function中timer清空，这样，在最后一次操作后，会在delay事件后执行该方法

>调用方法


//不使用防抖时的回调函数

function cb() {
    var timeNow = new Date().getTime(); //当前秒数
    console.log(timeNow);
}

document.getElementById('container').onscroll = debounce(cb, 100);