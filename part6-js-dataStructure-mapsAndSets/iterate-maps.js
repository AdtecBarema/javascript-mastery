
//Map: 
/**We can pass any value as a key and it should be unique*/

const map = new Map();

map.set('name',"James");//the set method take the key and the value 

map.set('age', 22).set('country', "Ethiopia")

console.log(map)

console.log(map.keys())

//keys(): Iterate keys of a map
for(const k of map.keys(0)){
    console.log(k);
}

//values(): Iterate values of map
for(const v of map.values(0)){
    console.log(v);
}

// entries(): Iterate key : values of map 
console.log(map.entries())

//Iterate using implicit entries of map, the key:value pairs
for(const keyValues of map){
    console.log(keyValues)
    console.log(keyValues[0])
    console.log(keyValues[1])
    console.log(keyValues[2])
}


