//Objects
const  person = {
    firstName:'Addis',
    age:34,
    isMale: true,
    balance:100.32,
    dob: new Date( 1988, 1, 28 ).toJSON(),

    address:{
    country:"USA",
    state:"Texas",
    city:"Dallas",
    PostCode:"75000"},

    //We can add functions within object
    toString: function(){
        return `Name: ${this.firstName},  Age:${this.age}`
    }
};

person.lastName= "Marilign"

console.log(person.toString());


//Iterating throug properties of objects

for(const p in person){
    console.log (p);
}

console.log(Object.values(person))
console.log(Object.keys(person))


