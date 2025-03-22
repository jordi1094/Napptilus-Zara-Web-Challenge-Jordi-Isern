export default function get (propierty){
    const data = localStorage.getItem(propierty) ? JSON.parse(localStorage.getItem(propierty)) : []
    return data
}