const user : {
    name : string,
    age : number,
    interests: string[]
} = {
    name : 'Avinash',
    age: 134,
    interests : ["sports", "gaming"]
}

for (const interest of user.interests) {
    console.log(interest);
    
}
