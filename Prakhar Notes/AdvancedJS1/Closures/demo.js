function process(){
    let a=0;
    return function b(){
        a++
}}
let x=process();
console.log(x());