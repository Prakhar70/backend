let obj = {};
console.log(10 - obj)//-->ToNumber(obj)-->ToPrimitive(obj, hint=number)-->valueOf(obj)-->obj not primitive type-->toString(obj) ==>[object Object] -->primitive type -- ToNumber("[object Object]")--> NaN
//10-NaN = NaN

let obj1 = {
    x: 2,
    valueOf() {
        return "100"
    }
}
console.log(10-obj1);

let obj2 = {
    x: 2,
    toString() {
        return "100"
    }
}
console.log(10-obj1);

let obj4={
    x:9,
    toString() {
        return {}
    }
}
console.log(10-obj4);//typeError