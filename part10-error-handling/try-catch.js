// Try catch 
// Exception is an object, an explanation about the issue we may face while we are running our program
const json = '{"brand"  "AddisCode"}'
try {
    console.log(JSON.parse(json))  
} catch (error) {
    console.log(`Opps can't parse JSON: ${json}`)
    console.log(error)
} finally {
    console.log (" ---- Finall was invoked ----")
}