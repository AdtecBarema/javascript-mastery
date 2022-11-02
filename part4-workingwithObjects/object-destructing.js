//Objects
const person = {
  firstName: "Addis",
  age: 34,
  isMale: true,
  balance: 100.32,
  dob: new Date(1988, 1, 28).toJSON(),
  address: {
    country: "USA",
    state: "Texas",
    city: "Dallas",
    PostCode: "75000",
  },

  //We can add functions within object
  toString: function () {
    return `Name: ${this.firstName},  Age:${this.age}`;
  },
};

person.lastName = "Marilign";

// const fristName = person.firstName;

// const  age= person.age

// const balance = person.balance

// the spread operator how to extract parameters from a give object using a spread operator

const { 
    firstName, 
    age,
     balance,
    address:{country,
            state,
            city,
            PostCode
            } 
} = person;

console.log(firstName);
console.log(age);
console.log(balance);
console.log(PostCode);
