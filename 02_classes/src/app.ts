// Code goes here!
class Department {
    name: string

    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department("acconting");
console.log(accounting.name);
