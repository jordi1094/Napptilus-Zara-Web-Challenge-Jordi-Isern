import style from "./delete-item-button.module.css"
import cart from "@/app/utils/cart"

export default function DeleteItemButton ({index, onDeleteItem}) {
    const deleteItem = (index) => {
        cart.deleteProduct(index)
        onDeleteItem()
    }

    return(
        <div className={style.frame}>
            <p onClick={() => deleteItem(index)} className={style.text}>Eliminar</p>
        </div>
    )
}
