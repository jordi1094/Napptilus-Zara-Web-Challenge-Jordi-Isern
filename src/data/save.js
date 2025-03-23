/**
 * Función que guarda un valor en el `localStorage`.
 * 
 * Esta función recibe un valor de datos y lo guarda en `localStorage` bajo una propiedad específica 
 * (`propierty`). El valor de los datos se convierte a una cadena JSON utilizando `JSON.stringify` 
 * antes de ser almacenado, lo que permite guardar datos complejos como objetos o arrays.
 * 
 * @param {any} data - El valor que se desea guardar en `localStorage`, puede ser cualquier tipo de dato.
 * @param {string} propierty - El nombre de la propiedad en `localStorage` bajo la cual se guardarán los datos.
 */
export default function save(data, propierty) {
  localStorage.setItem(propierty, JSON.stringify(data));
}
