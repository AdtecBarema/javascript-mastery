// How to use spread operator with Objects
const addisu = {
  firstName: "Addis",
  age: 34,
  isMale: true,
  balance: 100.32,
  dob: new Date(1988, 1, 28).toJSON(),
  //We can add functions within object
  toString: function () {
    return `Name: ${this.firstName},  Age:${this.age}`;
  },
};

const address = {
  country: "USA",
  state: "Texas",
  city: "Dallas",
  PostCode: "75000",
};

//The spread operator, "how to merge two objects into a single object"
const person= {
 ...addisu,
 myAddress:{...address},
 workexpreince:{...workExperince}
}

console.log (person)
