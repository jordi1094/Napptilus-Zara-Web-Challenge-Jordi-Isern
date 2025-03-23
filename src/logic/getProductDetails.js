/**
 * Función asincrónica que obtiene los detalles de un producto específico de una API externa.
 * 
 * Esta función realiza una solicitud GET a una URL específica de la API para obtener la información de un
 * producto en base a su identificador (`id`). Si la solicitud es exitosa (status 200), la función retorna 
 * los detalles del producto en formato JSON. Si hay algún error en la solicitud o si la respuesta no es exitosa, 
 * se lanza una excepción con el mensaje de error correspondiente.
 * 
 * @param {string} id - El identificador único del producto del cual se desean obtener los detalles.
 * 
 * @returns {Promise<Object>} - Retorna una promesa que resuelve con los detalles del producto en formato JSON.
 * 
 * @throws {Error} - Lanza un error si la solicitud falla o si el status de la respuesta no es 200.
 */
export default async function getProductDetails(id) {
  try {
    const url = `https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${id}`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
      },
    });
    if (response.status !== 200) {
      throw new Error(`Error ${response.status} : ${response.message}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    throw new Error(`Error ${error.message}`);
  }
}
