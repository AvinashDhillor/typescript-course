//unknown type is bit more restrictive and safer then any

let a : unknown;
let b : string

a = 3;
a = "AD"
b = "ADD"


// b = a; // bit safer then any , it will be ignored by typescript otherwise.

// NEVER type is used when function throw an error always
function errorHandler(errorCode: number, message: string) : never {
    throw {}
}