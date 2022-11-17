//array-map
//within the map use a callback to handle some logic 

const numbers=[1,2,3,4,5]

const multiplied=numbers.map(number=>{
    return number*2
})

multiplied.forEach((i)=>{
console.log(i)
})

const divided=numbers.map(number=>{
    return number/2
})

divided.forEach((i)=>{
    console.log(i)
    })


