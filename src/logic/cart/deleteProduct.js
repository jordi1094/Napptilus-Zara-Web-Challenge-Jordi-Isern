import data from "@/data";

/**
 * Función que elimina un producto del carrito de compras.
 * 
 * Esta función obtiene la lista de productos del carrito almacenada (usando `data.get("cart")`), 
 * luego elimina el producto en la posición especificada por el índice (`index`) utilizando el método `splice`.
 * Finalmente, la lista actualizada de productos se guarda nuevamente en el almacenamiento, 
 * reemplazando el carrito original (usando `data.save`).
 * 
 * @param {number} index - El índice del producto a eliminar de la lista del carrito.
 */
export default function deleteProduct(index) {
  const dataRevived = data.get("cart");

  dataRevived.splice(index, 1);

  data.save(dataRevived, "cart");
}
