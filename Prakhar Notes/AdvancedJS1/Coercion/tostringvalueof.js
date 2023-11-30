// every obj has toString method which return "[object Object]"", here we are overiding it 
let obj2 = {}
console.log(obj2.toString())

let obj = {
    toString() {
        //by default gives [object Object]
        return "Let's learn javascript"
    }
}
console.log(obj.toString());
console.log(typeof obj.toString())

//Similiarly every obj has valueOf method which return same object, here we are overiding it
let obj1 = { x: "Prakhar" }
console.log(obj1.valueOf());
console.log(typeof obj1.valueOf());

let obj3 = {
    x: "Prakhar",
    valueOf(){
        return 100
    }
}
console.log(obj3.valueOf());
console.log(typeof obj3.valueOf());