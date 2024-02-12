let obj={
    x:10,
    valueOf(){
        return 99;
    }
}
console.log(99 == obj);//true

console.log("***************");

let obj1={x:10};
let obj2={x:10};
let obj3={y:10};
console.log(obj1 === obj2);//false
console.log(obj1 === obj3);//false
console.log(obj1 === obj1);//true

console.log({x:10} === {x:10});//false