//Generators: we can't use arrow function for generator
const generator = function*(){

    yield 1;
    yield "Addisu";
    yield {name: 'Alex', gender:'MALE'}

   
}
console.log(generator)

const gen= generator();
// console.log (gen.next())
// console.log (gen.next())
// console.log (gen.next())
// console.log (gen.next())

let  res= gen.next();
while (!res.done){
    console.log (res.value)
    res = gen.next()

}