async function x(){
    let z=1+await 10;
    let p=await 3 + z;
    return p;
}
y=x();
console.log(y);//Pending Promise
console.log("Hello");
console.log(y);////Pending Promise
console.log("word");
console.log(y);//Pedning
y.then(function resolveHa(p){
    console.log(p)
})