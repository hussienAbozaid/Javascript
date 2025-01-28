// Task 3.1
billValue = +(prompt("Enter bill value: "));

let resultTip = billValue < 50 ? 0 : (billValue <= 300 && billValue >= 50) ? billValue * 0.15 : billValue * 0.2;

console.log(`The bill was ${billValue}, the tip was ${resultTip}`);
document.querySelector(".pTask3_1").innerHTML = `Bill value: <b>${billValue}</b> , the 
                                                tip was <b>${resultTip}</b>`;
// End Task 3.1

// Start Task 3.2
let dolphinsArr = (prompt("Enter data of dolphins separated by comma: "));
dolphinsArr = dolphinsArr.split(",");
let koalasArr = (prompt("Enter data of Koalas separated by comma: "));
koalasArr = koalasArr.split(",");

let calcAverage = (arr) => arr.reduce((sum, currValue) => sum + currValue, 0) / arr.length;

dolphinAvg = calcAverage(dolphinsArr);
koalasAvg = calcAverage(koalasArr);

let checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2)
        return true;
    else if (avgDolphins * 2 <= avgKoalas)
        return false;
};



console.log(`Winner is ${checkWinner(dolphinAvg, koalasAvg) ? "Dolphin" : "Koalas"} team`);

document.querySelector(".pTask3_2").innerHTML = `Winner is ${checkWinner(dolphinAvg, koalasAvg) ? "Dolphin" : "Koalas"} team`;



// End Task 3.2




