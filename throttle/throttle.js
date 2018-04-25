//首次不执行
// function throttle(fn, delay = 300) {
//     let startTime = Date.parse(new Date());

//     return (...args) => {
//         let currentTime = Date.parse(new Date());
//         let remaining = delay - (currentTime - startTime);

//         if(remaining <= 0) {
//             fn.apply(this, args);
//             startTime = Date.parse(new Date());
//         } else {
//             return;
//         }
//     }
// }

function throttle(fn, delay = 300) {
    let timer = null;
    let flag = true;
    let num = 0;

    return (...args) => {
        if(flag) { 
            // console.log(num + '-' + flag);
            flag = false;
            fn.apply(this, args);
        } else if(timer) {
            return;
        } else {
            // num ++;
            // console.log(num);
            timer = setTimeout(() => {
                fn.apply(this, args);
                clearTimeout(timer);
                timer = null;
            }, delay);
        }
    }
}

