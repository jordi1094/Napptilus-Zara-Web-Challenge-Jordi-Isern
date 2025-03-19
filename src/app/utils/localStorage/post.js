export default function post (object, propierty) {
    const data = localStorage.getItem(propierty) ?  JSON.parse(localStorage.getItem(propierty)) : []

    data.push(object)

    localStorage.setItem(propierty, JSON.stringify(data))
}