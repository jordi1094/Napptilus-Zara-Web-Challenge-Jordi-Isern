import style from "./cart-item-info.module.css"

export default function CartIntemInfo ({productName, productCapacity, productColor, productPrice}) {
    return (
        <div className={style.frame}>
            <div>
                <h5 className={style.text}>{productName}</h5>
                <h5 className={style.text}>{productCapacity} | {productColor}</h5>
            </div>
            <h5 className={style.text}>{productPrice}</h5>
        </div>
    )
}