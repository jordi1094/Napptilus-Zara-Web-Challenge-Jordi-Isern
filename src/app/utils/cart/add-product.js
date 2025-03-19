import localStorage from "../localStorage";

export default function addProduct (product) {
    localStorage.post(product, "cart")
}