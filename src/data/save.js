export default function save (data, propierty) {
    localStorage.setItem(propierty, JSON.stringify(data))
}