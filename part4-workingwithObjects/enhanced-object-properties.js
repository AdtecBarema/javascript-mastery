//Enhanced Object properties

const brandProp= "BRAND"

const calcuator = (brand, price)=> ({
    [brandProp]:brand,
    price,
    getDiscount(){
        return this.price-(this.price*.30)
    }
})

const casio = calcuator ('casio',10)
console.log (casio)
console.log (casio.getDiscount())