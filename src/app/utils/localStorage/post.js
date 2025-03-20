export default function post (data, propierty) {
    localStorage.setItem(propierty, JSON.stringify(data))
}

//TODO cambiar nombre a save y llamar localStorage ->DATA