console.log("" + 0); //strcat("" + "0")= "0"

let x= ""+0;
console.log(typeof x);

console.log("" + -0);

console.log("" + []);
console.log("" + {});

console.log("" + [1,2,3]);
console.log("" + [null,undefined]);
console.log("" + [1,2,null,4]);//1,2,,4

console.log(0 - "010");
console.log(0 - "o10");
console.log(0 - "O10");

console.log(0 - 010);
console.log(0 - "0xb");//0 - 11
console.log(0 - 0xb);//0 - 11
console.log(0 - []);//0
console.log(1 - []);
console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);

//ToNumber of empty string is 0 not NaN;
console.log( +"");