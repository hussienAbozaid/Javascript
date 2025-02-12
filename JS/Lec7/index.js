'use strict';


const arr = ['name', 'name', 'name'];



let person = {
    name: "John",
    age: 25,
    city: "New York",
    favSports: ["gym", "football", "shooting"],
    favFood: ["food1", "food2", "food3", "food4"],
    workingHours: {
        sat: {
            start: "08:00",
            end: "17:00"
        },
        sun: {
            start: "09:00",
            end: "16:00"
        },
    },

    functionLogger: (x) => {
        console.log(`my name is ${this.name} and my age is ${this.age} and i am living in ${this.city},
             my favorite sport is ${x} and working on ${this.workingHours}`);
    }
};


let data = new Map();

data.set('name', 'Hussien');
data.set('age', '25');
data.set('city', 'Maadi');
data.set('startWork', 8);
data.set('EndWork', 24);
data.set(true, 'He is not working');
data.set(false, 'He is working');
console.log(data);

data.set([12, 5648, 5345435, 23484], [124, 12365, 2158, 3516]);

console.log(data.get('name'), data.get('age'), data.get([12, 5648, 5345435, 23484]));

console.log(12 >= data.get('startWork') && 12 <= data.get('EndWork') ? 'In the work' : 'In the home');

// const data2 = setTimeout(() => {
//     console.log("after 3 seconds");
// }, 3000);

let intervalId;
function changeColor() {
    if (!intervalId) {
        intervalId = setInterval(flashText, 1000);
    }
}

function flashText() {
    const oElem = document.getElementById("my_box");
    oElem.className = oElem.className === "go" ? "stop" : "go";
}
function stopTextColor() {
    clearInterval(intervalId);
    
    intervalId = null;
}
document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor) ; 






