// const User = function (fName, lName) {
//     this.fName = fName;
//     this.lName = lName;


// }

// User.prototype.fullName = function () {
//     return `${this.fName} ${lName}`;
// };

// class User {
//     constructor(fName, lastName, age) {
//         this.fName = fName;

//         this.lastName = lastName;
//         this.age = this.age;
//     }

//     fullName() {
//         console.log(`${this.fName} ${this.lastName}`);
//     }
// }
// class Admin extends User {
//     constructor(fName, lastName, role, age) {
//         super(fName, lastName, age);
//         this.role = role;

//     }

//     calcAge() {
//         console.log(`Age of admin is calculated successfully`);
//     }

//     static calcData(data) {
//         const currDate = new Date();
//         const diff = currDate.getFullYear();
//         console.log(diff);
//     }
// }

// const user1 = new User('Hussien', 'Abozaid');
// /*
// 1- new {} is created
// 2- function is called then this = {}
// 3- {} linked to the prototype.
// 4- automatically returned that obj is created
// // */
// console.log(user1);
// user1.fullName();
// const admin1 = new Admin(`Ali`, 'Abozaid', 23, 'admin');
// admin1.calcAge()
// admin1.fullName();

// admin1.calcAge(); // log
// Admin.calcAge(); // error
// admin1.calcData(); // error
// Admin.calcData(); // log


// const Product = function (name, describtion, quantity, price) {
//     this.name = name;
//     this.describtion = describtion;
//     this.quantity = quantity;
//     this.price = price;
// }
// Product.prototype.printData = function () {
//     return `Name of product: ${this.name}\nDescription: ${this.describtion}\n
//             Quantity: ${this.quantity}\n
//             Price: ${this.price}`;
// };

// let productName = prompt("Enter Name: ");
// let productDesc = prompt("Enter describtion: ");
// let productQuant = prompt("Enter quantity: ");
// let productPrice = prompt("Enter price: ");

// const product1 = new Product(productName, productDesc, productQuant, productPrice);
// console.log(product1.printData()) ;

const postsContainer = document.querySelector('.bigContainer')
let count = 0;

const data = fetch("https://fakestoreapi.com/products?limit")
    .then(response => response.json())
    .then(data => data.map(product => {
        console.log(product);
        let postElement = document.createElement("div"); // create div to contain data
        postElement.className = "col";
        // postElement.classList.add("product");

        postElement.innerHTML = `
            <img src=${product.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.price}$</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${product.category}</small>
                    </div>
            ` ;
        postsContainer.appendChild(postElement);

    }));







// console.log(data);


