function triangleCheck(a, b, c) {
    return (a + b) > c && (a + c) > b && (b + c) > a ? true : false;
}

console.log(triangleCheck(1, 2, 2));
console.log(triangleCheck(4, 2, 3));
console.log(triangleCheck(2, 2, 2));
console.log(triangleCheck(1, 2, 3));
console.log(triangleCheck(-5, 1, 3));
console.log(triangleCheck(0,2,3));
console.log(triangleCheck(1,2,9));