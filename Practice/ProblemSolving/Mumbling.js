function accum(s) {
    // let bigStr = "";
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < i + 1; j++) {
    //         if (j === 0)
    //             bigStr += s[i].toUpperCase();
    //         else
    //             bigStr += s[i].toLowerCase();
    //     }
    //     if (i != s.length - 1)
    //         bigStr += "-";
    // }
    // return bigStr;
    // Another answer 

    return s.split('').map((elem, index) => (elem.toUpperCase() + elem.toLowerCase().repeat(index))).join('-');

}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
console.log(accum("ussaeftpsjl"));