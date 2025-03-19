import style from "./product-info-frame.module.css"

export default function ProductInfoFrame ({product, selectedStorage}) {
    return (
        <div className={style.titleAndPrice}>
                            <h4 className={style.title}>{product.name.toUpperCase()}</h4>
                            <h4 className={style.price}>{`${selectedStorage ? selectedStorage.price : product.basePrice} EUR`}</h4>
        </div>
    )
}