//Sets

const numbersArray= [1,1,2,2,3];
console.log(numbersArray);

//Set where we want to save items without duplication 

const numberSet = new Set();

//.add() to add an element to the set
//We can add elements through a cascade pattern
numberSet.add(1).add(1).add(2).add(2).add(2).add(3);

console.log(numberSet)

//Set share the same API as Map
console.log(numberSet)
//.delete() to delete an item from a set 
console.log(numberSet.delete(1))
console.log(numberSet)

//.size to get the size
console.log(numberSet.size)

const curaited = Array.from(new Set(numbersArray))
console.log(curaited);
