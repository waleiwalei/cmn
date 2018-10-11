
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 20));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// expected output: 15

// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(a, b) {
//       return a.concat(b);
//     }
//   );
// console.log(flattened);

// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) { 
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(countedNames);

let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current)=>{
    if(init.length===0 || init[init.length-1]!==current){
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]

Array.prototype.reduce = () => {
    let func = arguments[0];
    let asset = arguments.length > 1 ? 1 : 0;
    if(!func || typeof func !== 'function') {
        throw new Error('callback wrong');
    }

    let accu, curr;
    if(asset) {
        accu = arguments[1];
        curr = this[0];
    } else {
        accu = this[0];
        curr = this[1];
    }

    while(asset < this.length) {
        accu = func(accu, curr);
        asset += 1;
        curr = this[asset];
    }

    return accu;
}
