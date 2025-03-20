import localStorage from "../localStorage";

export default function getQuantityOfProducts () {
    const products = localStorage.get("cart")

    return products.length
}