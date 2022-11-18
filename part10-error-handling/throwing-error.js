//Creating custom errors
class MyError extends Error {

    constructor(message){
        super(message)
        this.name= "MyError";
    }
}

const divide = (n1, n2)=>{ 
    if(n2==0){
        throw new MyError("Can't divided by 0")
    }
    return n1/n2
}

try {
    console.log (divide(10,0)) 
} catch (error) {
   console.log(error) 
} 






