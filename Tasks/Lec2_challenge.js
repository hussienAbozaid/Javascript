let massMark = +prompt("Enter Weight in Kilos for person Mark: ");
let heightMark = +prompt("Enter height in meters for person Mark : ");

let massJohn = +prompt("Enter Weight in Kilos for person John: ");
let heightJohn = +prompt("Enter height in meters for person John : ");

// console.log(massMark)


if (massJohn === 0 || heightJohn === 0 || heightMark === 0 || massJohn === 0) {
    resNaN = document.querySelector("#body");
    resNaN.innerHTML = "<h1><b>Null Respond.</b></h1>";
}
else {
    let BMI = (wght, hght) => {
        return wght / (hght * hght);
    };
    // Challenge 1 starts
    let markHigherBMI = false;
    // This case will make mark higher BMI
    if (BMI(massJohn, heightJohn) < BMI(massMark, heightMark))
        markHigherBMI = true;
    res1Paragraph = document.querySelector(".result1");
    res1Paragraph.innerHTML = `<p>Boolen that Mark has highest
                                BMI (Body Mass Index): <b>${markHigherBMI}</b>; 
                                <br>i.e: false means
                                that Mark did not has BMI index, else Mark is greater.</p>`;
    // End challenge 1

    // Challenge 2

    if (markHigherBMI) {
        //Challenge 2.1 
        res2_1Paragraph = document.querySelector(".result2_1");
        res2_1Paragraph.textContent = "Mark's BMI is higher than John's";
        //Challenge 2.2
        res2_2Paragraph = document.querySelector(".result2_2");
        res2_2Paragraph.innerHTML = `<p>Mark's BMI <b>(${BMI(massMark, heightMark)})</b> is higher than John's <b>(${BMI(massJohn, heightJohn)})</b></p>`;

    }
    else {
        //Challenge 2.1 
        res2_1Paragraph = document.querySelector(".result2_1");
        res2_1Paragraph.textContent = "John's BMI is higher than Mark's";
        //Challenge 2.2
        res2_2Paragraph = document.querySelector(".result2_2");
        res2_2Paragraph.innerHTML = `<p>John's BMI <b>(${BMI(massJohn, heightJohn)})</b> is higher than Mark's <b>(${BMI(massMark, heightMark)})</b></p>`;

    }
}




