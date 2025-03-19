import style from "./cart-item.module.css"
import Image from "next/image"

export default function CartItem ({product}) {
    const productName = product.name.toUpperCase()
    const productColor = product.selectedColor.name.toUpperCase()
    const productCapacity = product.selectedStorage.capacity.toUpperCase()
    const productPrice = product.selectedColor.price
    console.log(product)
    return (
        <div className={style.cartItem}>
            <Image className={style.itemImage} src={product.selectedColor.imageUrl} fill alt={`image from ${productName} in color ${productColor}`}/>
            <div className={style.infoAndDelete}>
                <h5 className={style.productName}>{productName}</h5>
                <h5 className={style.productCapacityAndColor}>{productCapacity} | {productColor}</h5>
                <h6 className={style.productPrice}>{productPrice}</h6>
            </div>
        </div>
    )
}