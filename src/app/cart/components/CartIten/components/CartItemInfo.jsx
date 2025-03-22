import style from "./CartItemInfo.module.css"

export default function CartIntemInfo ({productName, productCapacity, productColor, productPrice}) {
    return (
        <div className={style.frame}>
            <div className={style.nameCapacity}>
                <h5 className={style.text}>{productName}</h5>
                <h5 className={style.text}>{productCapacity} | {productColor}</h5>
            </div>
            <h5 className={style.text}>{productPrice}</h5>
        </div>
    )
}