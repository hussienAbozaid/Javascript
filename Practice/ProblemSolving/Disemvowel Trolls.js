function DisemvowelTrolls(str) {
    let vowels = "aeiouAEIOU";
    let resStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i]))
            resStr += str[i];
    }
    return resStr;
}

console.log(DisemvowelTrolls("This website is for losers LOL!"));
// "Ths wbst s fr lsrs LL!".   




