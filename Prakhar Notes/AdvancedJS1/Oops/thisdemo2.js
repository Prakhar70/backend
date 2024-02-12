console.log(this)
let iPhone = {
    name: "Iphone",
    price: 1000000,
    description: "the new iphone 13 pro",
    rating: 4.8,
    display: function (){//make it arrow function and see difference
        let IphoneRed={
            name: "Iphone Red",
            price: 1000000,
            print:()=>{
                console.log(this);
            }
        }
        IphoneRed.print();
    }
}

iPhone.display()