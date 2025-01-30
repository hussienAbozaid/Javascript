
// Function
let x = (Math.random() * 11);

let y = Math.trunc(x);

console.log(y);


// function calcAge(birthYear) {
//     // console.log(2025 - birthYear);
//     return 2025 - birthYear;

// }
// function calcAgeDynamically(birthYear) {
//     const CurrYear = new Date().getFullYear();
//     return CurrYear - birthYear;
// }
// console.log(calcAgeDynamically(2000));

// function calcAge(...birthYear) {
//     let x = [];

//     birthYear.forEach(obj => {
//         x.push(new Date().getFullYear() - obj)
//     })

//     return x;
// }
// const res = calcAge(1999, 2000, 2001);
// console.log(res);

let billValue = (prompt("Enter bill value separated by commas: "));
let billValues = billValue.split(',');

let resultTips = [];
let totalValues = [];
function calcTipsValues(...billArr) {
    billArr.forEach(elem => { elem < 50 ? resultTips.push(0) : (elem <= 300 && elem >= 50) ? resultTips.push(elem * 0.15) : resultTips.push(elem * 0.2) });
    // console.log(resultTips)
    // for (let i = 0; i < billArr.length; i++) {
    //     if (Number(billArr[i]) < 50) {
    //         resultTips.push(0);
    //     }
    //     else if (Number(billArr[i]) >= 50 && Number(billArr[i] <= 300)) {
    //         resultTips.push(Number(billArr[i]) * 0.15);
    //         console.log(Number(billArr[i]) * 0.15);
    //     }
    //     else {
    //         resultTips.push(Number(billArr[i] * 0.2));
    //         console.log(Number(billArr[i] * 0.2))
    //     }
    // }

    for (let i = 0; i < resultTips.length; i++) {
        totalValues.push(+(billArr[i]) + (resultTips[i]));
    }

    // console.log(resultTips, totalValues);


}

// const TipsArr = 
calcTipsValues(billValues);
// const totalValuesArr = 
calcTipsValues(billValues);

// ,totalValuesArr }

// console.log(calcTipsValues(billValues));
// console.log(TipsArr);
// console.log(billValues);
console.log(TipsArr, totalValuesArr);

console.log(`The bill was ${billValues}\nThe tip was ${TipsArr}\nThe total values: ${totalValuesArr}`);
document.querySelector(".pTask4").innerHTML = `Bill value: <b>${billValues}</b><br>the 
                                                tips was <b>${TipsArr}</b><br>The total values ${totalValuesArr}`;






