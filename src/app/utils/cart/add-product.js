import localStorage from "../localStorage";

export default function addProduct (product) {
    const data = localStorage.get("cart")

    data.push(product)
    localStorage.post(data, "cart")
}