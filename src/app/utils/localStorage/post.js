export default function post (data, propierty) {
    localStorage.setItem(propierty, JSON.stringify(data))
}