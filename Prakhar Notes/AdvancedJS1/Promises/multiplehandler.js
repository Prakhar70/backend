function createPromise(){
    return new Promise(function exec(res, rej){
        console.log("resolving promise");
        resolve("Done");
    })
}
setTimeout(function process(){
    console.log("Timer Completed");
},0);

let p=createPromise();
p.then(function fulfillHandler1(value){
    console.log("we fulfilled 1 with a value", value);
}, function rejectHandler(){});

p.then(function fulfillHandler2(value){
    console.log("we fulfilled 2 with a value", value);
}, function rejectHandler(){});

p.then(function fulfillHandler3(value){
    console.log("we fulfilled 3 with a value", value);
}, function rejectHandler(){});

for(let i=0;i<1000000000;i++){}

console.log("ending");