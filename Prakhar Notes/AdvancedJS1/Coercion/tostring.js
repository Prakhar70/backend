let obj={};
console.log(obj.toString());//[object Object]

let obj1={
    toString(){
        return 10;
    }
}
console.log(obj1.toString());//10