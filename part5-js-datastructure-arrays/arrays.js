//Arrays 
const numbers=[1,2,3,4,5]

numbers.push(45)
numbers.forEach((i)=>{
console.log(i)
})

numbers[0]=44
console.log(numbers)

numbers.push(60)
//Arrays Destructuring 
const name =[
    "James","Mariam", "Jamal","Aisha","Alex"
];


// const james = name[0];
// const mairam = name[1];
const [james, mariam, jemal, ...remaining] = name;
console.log(james);
console.log(mariam);
console.log(remaining);
