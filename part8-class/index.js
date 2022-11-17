import {Person, SoftwareEngineer} from "./class.js"

const alex = new Person("Alex", "Marthin", "MALE", 25);



const bob = new SoftwareEngineer( "Bob", "Smith", "Male", 17, ['JS', 'GoLang']);

//Properties
console.log(alex.firstName)
console.log(alex.gender)
console.log(alex.age)
//Behaviour
alex.sleep();
alex.eat();

bob.code();
