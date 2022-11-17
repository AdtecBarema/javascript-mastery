//Promise all takes array of promise and return list of resolves
// We can use it in the scenario where either all or nothing 

//Async Await
console.log("Synchronous 1")
const customers = new Promise((resolve, reject)=>{
    return Promise.resolve().then(()=>{
        let i = 0;
        while (i<2_000_000) i++
        resolve(
            [
                { name:"Addisu", id: 1 },
                { name: "Dagn", id: 2 }
            ]
        )
    })
})

const addresses = new Promise((resolve, reject)=>{

    return Promise.resolve().then(()=>{
        let i = 0;
        while (i<2_000_000_000) i++
        resolve([
            {customerId: 1, address: "London"},
            {customerId: 2, address: "USA"}
        ])
        
    })
});

const fetchData = async() => {
    //const c = await customers;
    //const a = await addresses;    
    //console.log(a)
    //console.log (c)  

    // Promise.all([customers,addresses]).then(values=>{
    //     console.log(values);
    //   })  

      const values=  await Promise.all([customers,addresses]);
      const [c,a]= values;
      console.log(a)
      console.log (c) 
}

console.log("Synchronous 2")
fetchData()