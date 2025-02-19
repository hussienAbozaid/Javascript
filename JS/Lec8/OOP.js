// const User = function (fName, lName) {
//     this.fName = fName;
//     this.lName = lName;


// }

// User.prototype.fullName = function () {
//     return `${this.fName} ${lName}`;
// };

// const user1 = new User('Hussien', 'Abozaid');
// /*
// 1- new {} is created
// 2- function is called then this = {} 
// 3- {} linked to the prototype. 
// 4- automatically returned that obj is created
// */


// console.log(user1);


// console.log(user1.fullName()); 


const Product = function (name, describtion, quantity, price) {
    this.name = name;
    this.describtion = describtion;
    this.quantity = quantity;
    this.price = price;
}
Product.prototype.printData = function () {
    return `Name of product: ${this.name}\nDescription: ${this.describtion}\n
            Quantity: ${this.quantity}\n
            Price: ${this.price}`;
};

let productName = prompt("Enter Name: ");
let productDesc = prompt("Enter describtion: ");
let productQuant = prompt("Enter quantity: ");
let productPrice = prompt("Enter price: ");

const product1 = new Product(productName, productDesc, productQuant, productPrice);
console.log(product1.printData()) ; 



