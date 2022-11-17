

//the relation between Object and Map

//Object: 
const person ={
    firstName: "james",
    age: 2
}

//Map: 
/**We can pass any value as a key and it should be unique*/

const map = new Map();
map.set('fristName',"James");//the set method take the key and the value 
map.set('age', 2)
map.set({age: 'foo'}, 2)
console.log(map)
