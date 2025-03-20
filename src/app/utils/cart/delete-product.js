import localStorage from "../localStorage";
export default function deleteProduct (index) {
    const data = localStorage.get("cart")

    
    data.splice(index, 1)

    localStorage.post(data, "cart")
}