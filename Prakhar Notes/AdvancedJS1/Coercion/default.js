// ToNumber(10);// abstract operation
console.log(2-9);
console.log(2 - null);// 2-0
console.log(2-undefined);// 2-NaN

console.log("403"-10);//403-10
console.log("10asd"-10);//Nan-10

//Assignment
console.log(1-"0xa");//0xa is valid number in some number system
//0xa is 10 in hexadecimal
console.log("0b1111"-1);//0b1111 is 15 in binary number system

//toString and ToString
//toString --> normal Js function
//ToString --> abstract operation