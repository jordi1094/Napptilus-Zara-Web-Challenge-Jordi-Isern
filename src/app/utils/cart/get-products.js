import localStorage from "../localStorage";

export default function getProdcuts () {
    const products = localStorage.get(cart)

    return products
}