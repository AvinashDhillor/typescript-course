function add(num1: number, num2: number, isResult: boolean, pharase : string) {
    const result = num1 + num2;
    if(isResult) {
        console.log(pharase + result);
    }
}

add(10, 20, true, "Result is: ")