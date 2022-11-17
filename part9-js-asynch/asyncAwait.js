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
    try {
        //When one promise is dependent on the result from the other, we can call one promise after the other
        //Otherwise we better use Promise.all() instead
      const c = await customers; //this line is blocking 
      const a = await addresses; //this line is also blocking
      console.log(a)
      console.log (c)  
    } catch (error) {
        console.log(error);
    }
}

console.log("Synchronous 2")
fetchData()