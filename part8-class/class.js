//Class
class Person {

  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  sleep() {
    console.log(`${this.firstName} is sleeping`);
  }

  eat() {
    console.log(`${this.firstName} is eating`);
  }

  //a getter/setter  methods can be used as a property for the class
  get fullName() {
    return `firstName: ${this.firstName}   lastName: ${this.lastName}`;
  }

  set fName(fName) {
    this.firstName = fName;
  }
  toString() {
    return `firstName: ${this.firstname}  lastName: ${this.lastName} Gender: ${this.gender} Age:${this.age}`;
  }
}

class SoftwareEngineer extends Person {
  constructor(firstName, lastName, gender, age, programmingLanguage) {
    super(firstName, lastName, gender, age);
    this.programmingLanguage = programmingLanguage;
  }
  code(){
    console.log(`${this.firstName} is coding using ${this.programmingLanguage}`)
  }
}


export {Person, SoftwareEngineer};
