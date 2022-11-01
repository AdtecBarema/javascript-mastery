//Functions

const getBrand=brand=> ( {
    brandName: brand,
    website: `www.${brand.toLowerCase()}.com`})

const brand1= getBrand("Nike");
console.log(JSON.stringify(brand1,null,1))

const add= (a,b)=>{
 return a+b;
}
//Using switch for writing a simple function
const calculator=(a, b, sign)=>{  
    switch(sign){
        case '+':
            return a+b;
        case '-':
            return a-b;
        
        case '*':
            return a*b;
        case '/':
                return a/b;
        // default:
        //     console.log("This operation can't be handled by this simple calcuator,sorry");

    }
console.log(" Thanks for using our Simple calculator version 1.0.0")
}
console.log(calculator(10,20,'+'))
console.log(calculator(10,20,'*'))
console.log(calculator(10,20,'/'))
console.log(calculator(10,20,'-'))