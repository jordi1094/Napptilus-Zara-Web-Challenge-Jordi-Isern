/**
 * Función que obtiene un valor almacenado en el `localStorage`.
 * 
 * Esta función recibe un nombre de propiedad (`propierty`) y trata de obtener el valor correspondiente 
 * de `localStorage`. Si el valor existe, lo convierte de una cadena JSON a su formato original utilizando 
 * `JSON.parse`. Si no existe ningún valor almacenado con ese nombre, devuelve un array vacío como valor predeterminado.
 * 
 * @param {string} propierty - El nombre de la propiedad a recuperar desde `localStorage`.
 * 
 * @returns {any} - Retorna el valor almacenado en `localStorage` correspondiente a la propiedad, 
 *                  o un array vacío si la propiedad no existe en el almacenamiento.
 */
export default function get(propierty) {
  const data = localStorage.getItem(propierty)
    ? JSON.parse(localStorage.getItem(propierty))
    : [];
  return data;
}
