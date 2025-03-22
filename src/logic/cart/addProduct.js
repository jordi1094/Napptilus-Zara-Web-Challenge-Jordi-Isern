import data from "../../data/index"

export default function addProduct (product) {
    
    const dataRecived = data.get("cart")

    dataRecived.push(product)
    data.save(dataRecived, "cart")
}