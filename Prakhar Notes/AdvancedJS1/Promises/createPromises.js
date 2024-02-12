function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromisesWithLoop() {
    return new Promise(function executor(res, rej) {
        for (let i = 0; i < 1000000000; i++) { }
        let x = getRandomInt(10);
        console.log(x)
        if (x % 2 == 0) {
            res(x);
        } else {
            rej(x);
        }
    })
}


function createPromisesWithTimeout() {
    return new Promise(function executor(res, rej) {
        setTimeout(function () {
            let x = getRandomInt(10);
            console.log("inside promise" ,x)
            if (x % 2 == 0) {
                res(x);
                console.log("this will execute synchronously")
            } else {
                rej(x);
                console.log("this will execute synchronously")
            }
        },5000)

    })
}
let promise = createPromisesWithTimeout();
promise.then(function fh(x){
    console.log("fulfilled ",x);
}, function rh(x){
    console.log("rejected ", x)
})
//console.log(x);