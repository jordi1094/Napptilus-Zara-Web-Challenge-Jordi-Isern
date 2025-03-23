/**
 * Función que agrega un producto al carrito de compras.
 * 
 * Esta función obtiene la lista actual de productos en el carrito (usando `data.get("cart")`), 
 * luego agrega un nuevo producto al final de la lista utilizando el método `push`. 
 * Finalmente, la lista actualizada de productos se guarda nuevamente en el almacenamiento 
 * (usando `data.save`) para actualizar el carrito.
 * 
 * @param {Object} product - El producto que se desea agregar al carrito. Debe ser un objeto con los detalles del producto.
 */
import data from "../../data/index";

export default function addProduct(product) {
  const dataRecived = data.get("cart");

  dataRecived.push(product);
  data.save(dataRecived, "cart");
}
