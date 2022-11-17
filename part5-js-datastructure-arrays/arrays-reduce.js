//Arrays reduce
const numbers=[1,2,3,4,5]

const result= numbers.reduce((accumlator, current)=>{   
    return accumlator * current;
})

console.log(result)