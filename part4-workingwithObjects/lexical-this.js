//Lexical this issue when an internal this trying to refere an external this
//There are three possible solutions to handle this use case
//1. Using the bind(this)
//2. Using the that pattern, const that= this
//3. For the internal function we can use the arrow function, but we dont need to use arrow function for the extrenal function

const lexIssue='Lexical this issue'
console.log(`${lexIssue}`,', before the fix:')
const person = {
  firstName: "Addis M",
  age: 34,
  isMale: true,
  balance: 100.32,
  cars: ["Toyota", "BMW", "Ferrari", "PORSCH"],
  dob: new Date(1988, 1, 28).toJSON(),

  address: {
    country: "USA",
    state: "Texas",
    city: "Dallas",
    PostCode: "75000",
  },

  //Lexical this
  toString: function () {
    console.log(`Name: ${this.firstName}`);
    this.cars.forEach(
      function (car) {
        console.log(`Name: ${this.firstName} drives ${car}`);
      }
    );
    console.log('\n')
  },
  
};
person.toString();

//There are three ways to solve the this issue 
const lexsolved='Lexical this issue solved using:'

//1. Using the bind(this)
console.log(`${lexsolved}`,  'bind(this) approach')
const personLexwithBind = {
    firstName: "Addis M",
    age: 34,
    isMale: true,
    balance: 100.32,
    cars: ["Toyota", "BMW", "Ferrari", "PORSCH"],
    dob: new Date(1988, 1, 28).toJSON(),
  
    address: {
      country: "USA",
      state: "Texas",
      city: "Dallas",
      PostCode: "75000",
    },
  
    //Lexical this
    toString: function () {
      console.log(`Name: ${this.firstName}`);
      const that = this;
      this.cars.forEach(
        function (car) {
          console.log(`Name: ${this.firstName} drives ${car}`);
        }.bind(this)
      );
      console.log('\n')
    },
  };
  personLexwithBind.toString()
//2. Using the that pattern, const that= this
console.log(`${lexsolved}`, 'that this pattern')
const personLexwithThatPattern = {
    firstName: "Addis M",
    age: 34,
    isMale: true,
    balance: 100.32,
    cars: ["Toyota", "BMW", "Ferrari", "PORSCH"],
    dob: new Date(1988, 1, 28).toJSON(),
  
    address: {
      country: "USA",
      state: "Texas",
      city: "Dallas",
      PostCode: "75000",
    },
  
    //Lexical this
    toString: function () {
      console.log(`Name: ${this.firstName}`);
      const that = this;
      this.cars.forEach(
        function (car) {
          console.log(`Name: ${this.firstName} drives ${car}`);
        }
      );
      console.log('\n')
    },
  };
  personLexwithThatPattern.toString()
  
  //3. For the internal function we can use the arrow function, but we dont need to use arrow function for the extrenal function
console.log(`${lexsolved}`,'arrow function approach')
const personLexWithArrowFunc = {
    firstName: "Addis M",
    age: 34,
    isMale: true,
    balance: 100.32,
    cars: ["Toyota", "BMW", "Ferrari", "PORSCH"],
    dob: new Date(1988, 1, 28).toJSON(),
  
    address: {
      country: "USA",
      state: "Texas",
      city: "Dallas",
      PostCode: "75000",
    },
  
    //Lexical this
    toString: function () {
      console.log(`Name: ${this.firstName}`);
      const that = this;
      this.cars.forEach(
         (car)=> {
          console.log(`Name: ${this.firstName} drives ${car}`);
        }
      );
      console.log('\n')
    },
  };
  personLexWithArrowFunc.toString()