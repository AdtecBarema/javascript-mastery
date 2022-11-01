const getBrand=(brand="Hello" )=> ( {
    brandName: brand,
    website: `www.${brand.toLowerCase()}.com`})

// const brand1= getBrand("Nike");
// console.log(JSON.stringify(brand1,null,1))

const brand2= getBrand();
console.log(JSON.stringify(brand2,null,1))