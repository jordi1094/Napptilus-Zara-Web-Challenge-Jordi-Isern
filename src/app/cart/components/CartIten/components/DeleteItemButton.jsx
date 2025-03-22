import style from "./DeleteItemButton.module.css";
import cart from "@/logic/cart";

export default function DeleteItemButton({ index, onDeleteItem }) {
  const deleteItem = (index) => {
    cart.deleteProduct(index);
    onDeleteItem();
  };

  return (
    <div className={style.frame}>
      <p onClick={() => deleteItem(index)} className={style.text}>
        Eliminar
      </p>
    </div>
  );
}
