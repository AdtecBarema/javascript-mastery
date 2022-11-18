// Try catch 
// Exception is an object, an explanation about the issue we may face while we are running our program
const json = '{"brand"  "AddisCode"}'
try {

    console.log(brand)
    console.log(JSON.parse(json))  
} catch (error) {

    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}