
//Map: 
/**We can pass any value as a key and it should be unique*/

const map = new Map();

map.set('name',"James");//the set method take the key and the value 

map.set('age', 22).set('country', "Ethiopia")

console.log(map)

console.log(map.size)
console.log(map.has('name'))
console.log(map.has('age'))
console.log(map.has('foo'))
console.log(map.get('age'))
//map.clear;
console.log(map.size)

//convert map to object

console.log(Object.fromEntries(map.entries()))


