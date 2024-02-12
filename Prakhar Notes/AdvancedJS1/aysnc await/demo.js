async function a(){
    return 1 + await Promise.resolve(11);
}
let p = a();
console.log(p);
p.then(function fh(value){
    console.log(value);
})