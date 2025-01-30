
let seqArrNum1 = Array(10).fill(0);
let seqArrNum2 = Array(10).fill(0);
let flagNum1 = false; let flagNum2 = false;
function countDigits(num1, num2) {
    let digitNum1 = -1; let digitNum2 = -1;
    // String number 1
    let seqIndex1 = 0;
    for (let i = 0; i < num1.length; i++) {
        seqArrNum1[+(num1[i])]++;
        if (seqIndex1 !== i || seqIndex1 !== i + 1) {
            seqIndex1 = i;
            seqArrNum1[+(num1[i])] = 0;
        }


    }
    let seqIndex2 = 0;
    for (let j = 0; j < seqArrNum1.length; j++) {
        if (seqArrNum1[j] >= 3)
            digitNum1 = j;


    }


    // String number 2 
    for (let i = 0; i < num2.length; i++) {
        seqArrNum2[+(num2[i])]++;
        if (seqIndex2 !== i || seqIndex2 !== i + 1) {
            seqIndex2 = i;
            seqArrNum1[+(num2[i])] = 0;
        }
    }

    for (let j = 0; j < seqArrNum2.length; j++) {
        if (seqArrNum2[j] >= 2)
            digitNum2 = j;
    }
    if (digitNum1 === digitNum2) {
        flagNum1 = true;
        flagNum2 = true;
    }

}

let num1 = prompt("Enter num1: ");
let num2 = prompt("Enter num2: ");

countDigits(num1, num2);
console.log(seqArrNum1); console.log(seqArrNum2);
if (flagNum1 && flagNum2) {
    console.log('1');
    document.querySelector(".Solution").innerHTML = "1";
} else {
    console.log('0');
    document.querySelector(".Solution").innerHTML = "0";
}