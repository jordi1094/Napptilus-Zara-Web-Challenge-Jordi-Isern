import data from "@/data";

/**
 * Función que obtiene la lista completa de productos en el carrito de compras.
 * 
 * Esta función recupera la lista de productos almacenada en el carrito (usando `data.get("cart")`) 
 * y retorna dicha lista tal cual, sin realizar ningún filtro o modificación.
 * 
 * @returns {Array} - Retorna un array que contiene todos los productos en el carrito de compras.
 */
export default function getProdcuts() {
  const products = data.get("cart");

  return products;
}
