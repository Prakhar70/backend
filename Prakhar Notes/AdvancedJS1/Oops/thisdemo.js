let iPhone = {
    name: "Iphone",
    price: 1000000,
    description: "the new iphone 13 pro",
    rating: 4.8,
    display: function(){
        console.log("first disply: ", this);
    }
}
let macBook = {
    name: "MacBook",
    price: 2500000,
    description: "the new macbook pro",
    rating: 4.8,
    display:()=>{
        console.log("second disply: ",this);
    }
}
iPhone.display()// except one case refers to calling context
macBook.display()

// console.log(this);// here calling contect is node runtime in browser we'll get windows object