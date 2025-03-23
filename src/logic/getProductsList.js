/**
 * Función asincrónica que obtiene una lista de productos de una API externa.
 * 
 * Esta función realiza una solicitud GET a una URL específica de una API, pasando parámetros de búsqueda 
 * y limitando el número de productos a 20. Si se proporciona un parámetro `searchQuery`, se añade a la 
 * URL para filtrar los productos según la consulta de búsqueda. La respuesta se espera en formato JSON.
 * 
 * Si la solicitud es exitosa (status 200), la función retorna la lista de productos en formato JSON. Si 
 * hay algún error durante la solicitud (ya sea por problemas de red, respuesta inesperada o error en la API), 
 * se lanza una excepción con el mensaje de error correspondiente.
 * 
 * @param {string} searchQuery - (Opcional) Consulta de búsqueda para filtrar los productos.
 * 
 * @returns {Promise<Array>} - Retorna una promesa que resuelve con una lista de productos en formato JSON.
 * 
 * @throws {Error} - Lanza un error si la solicitud falla o si el status de la respuesta no es 200.
 */
export default async function getProductsList(searchQuery) {
  try {
    const url = new URL(
      `https://prueba-tecnica-api-tienda-moviles.onrender.com/products`,
    );
    url.searchParams.append("limit", "20");

    if (searchQuery) {
      url.searchParams.append("search", searchQuery);
    }
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
      },
    });
    if (response.status !== 200) {
      return new Error(`Error ${response.status} : ${response.message} `);
    }
    const productsList = await response.json();
    return productsList;
  } catch (error) {
    return new Error(`Error ${error.message}`);
  }
}
