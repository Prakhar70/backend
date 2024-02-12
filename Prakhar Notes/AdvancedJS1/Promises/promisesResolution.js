function createPromises(){
    return new Promise(function executor(res, rej){
        console.log("resolved");
        res(10);
    })
}
let p=createPromises();
p.then(function resolvedfun(x){
    console.log("Running Resolved fucntion");
})