
function Product(n,p,d){
    this.name=n,
    this.price=p,
    this.description=d,
    this.display=function(){
        console.log(this);
    }
    return 10;
}
const p = new Product("Iphone",100,"This is iphone");

console.log(p.display());