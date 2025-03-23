import data from "@/data";

/**
 * Función que obtiene la cantidad de productos en el carrito de compras.
 * 
 * Esta función recupera la lista de productos almacenada en el carrito (usando `data.get("cart")`) 
 * y retorna la cantidad de productos que hay en él, basándose en la longitud del array de productos.
 * 
 * @returns {number} - Retorna un número que representa la cantidad de productos en el carrito de compras.
 */
export default function getQuantityOfProducts() {
  const products = data.get("cart");

  return products.length;
}
