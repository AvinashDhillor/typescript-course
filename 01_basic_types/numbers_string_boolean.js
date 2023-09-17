function add(num1, num2, isResult, pharase) {
    var result = num1 + num2;
    if (isResult) {
        console.log(pharase + result);
    }
}
add(10, 20, true, "Result is: ");
