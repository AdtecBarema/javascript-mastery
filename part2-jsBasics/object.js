
var person = {
    firstName:'Addis',
    age:34,
    isMale: true,
    balance:100.32,
    dob: new Date( 1988, 1, 28 ).toJSON(),

    address:{
    country:"USA",
    state:"Texas",
    city:"Dallas",
    PostCode:"75000"}

};


console.log(person)
console.log(person.address)
console.log(person.address.city)
console.log(Object.values(person))
console.log(Object.keys(person))
console.log(JSON.stringify(person))
