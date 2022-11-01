//Loops

for(let i=0; i<=10; i++){
    console.log( i);
}


var names = [
    'Alex',
    'Addis',
    'Joe',
    'Aisha'
];
console.log("Approach1: regular For-----")
for(var i=0; i<names.length; i++){
    console.log(names[i]);
}

//Forof
console.log("Approach2: ForOf-----")
for (const name  of names) {
    console.log(name);    
}

//ForEach
console.log("Approach3: ForEach-----")
names.forEach((name)=> {
    console.log(name);    
} );



