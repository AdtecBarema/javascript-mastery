const BRAND= {
    brand:"Addisu",
    website:"addisumm.com"
 }

  const add =(a,b)=>a+b;
  const subtract =(a,b)=>a-b;



export default BRAND;

//For a given file we can have only one default export, and we can also have any number of other exports 
//While we are importing, default export don't need to be within a curly bracket while a regular (non-default) export should be maintained within a bracket

//We can export collectively 

export{
    add, subtract
}
