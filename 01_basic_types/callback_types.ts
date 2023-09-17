function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // callback type details are provided here
    const result = n1 + n2;
    cb(result)
}

//That's correct. As you learned, callback functions can return something, even if the argument on which they're
//passed does NOT expect a returned value.