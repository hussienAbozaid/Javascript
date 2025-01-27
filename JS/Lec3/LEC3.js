const fArray = [1, "a", true, { age: 24 }, "Hussien", "18"];
// console.log(fArray[3], fArray[4]);


// for (let i = 0; i < fArray.length; i++) {
//     console.log(fArray[i]);
// }



// Task 3
// const arr = ['a', 'b', 'c', 'd'];

// let reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr += arr[i];
// }
// console.log(`Array reversed using looping: ${reversedArr}`)
// // Output: dcba 
// // Solution:
// const arrReversed = arr.reverse().join("");
// console.log(`New array using reverse function: ${arrReversed}`);
// // End Solution

// let data = {
//     firstName: "Hussien",
//     lastName: "Said Abozaid",
//     age: 25,
//     city: "Maadi, Cairo",
//     hobbies: ["Fitness", "reading", "Art"],
//     address: {
//         cairo: "Maadi",
//         cairo: "Zahraa ElMaadi",
//     }
// };

// console.log(data);
// console.log(data.address.cairo)
// console.log(data.hobbies[1]);

// Challenge #3

DolphinElements = prompt("Enter data of Dolphin separated by comma: ");
KoalasElements = prompt("Enter data of Koalas separated by comma: ");

let dolphinElementsArray = DolphinElements.split(',');
let koalasElementsArray = KoalasElements.split(',');

const getAverage = (array) => array.reduce((sum, currentValue) => sum + currentValue) / array.length;

DolphinAverage = getAverage(dolphinElementsArray);
koalasAverage = getAverage(koalasElementsArray);

// let winner = 0;
if (DolphinAverage > koalasAverage && DolphinAverage >= 100)
    console.log("Dolphin winner");
else if (DolphinAverage < koalasAverage && koalasAverage >= 100)
    console.log("Koalas winner");
else
    console.log("Draw");









