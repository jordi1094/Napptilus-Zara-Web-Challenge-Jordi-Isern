import style from "./cart-item.module.css"
import Image from "next/image"
import CartIntemInfo from "./components/cart-item-info.component"
import DeleteItemButton from "./components/delete-item-button.component"

export default function CartItem ({product, index, onDeleteItem}) {
    const productColor = product.selectedColor.name.toUpperCase()
    const productName = product.name.toUpperCase()
    const productCapacity = product.selectedStorage.capacity.toUpperCase()
    const productPrice = product.selectedStorage.price
    
    return (
        <div className={style.cartItem}>
            <div className={style.infoAndDelete}>
                <CartIntemInfo onDeleteItem={onDeleteItem} productName={productName} productCapacity={productCapacity} productColor={productColor} productPrice={productPrice}/>
                <DeleteItemButton index={index}/>
            </div>
            <Image className={`${style.itemImage} object-contain`} priority  src={product.selectedColor.imageUrl} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 60vw" alt={`image from ${productName} in color ${productColor}`}/>
        </div>
    )
}