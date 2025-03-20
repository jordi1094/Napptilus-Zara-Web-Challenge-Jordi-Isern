import style from "./cart-counter.module.css"

export default function CartCounter ({productsInCart}) {
    return (
            <h6 className={style.title}>{`CART (${productsInCart.length})`}</h6>
    )
}

// TODO cambiar carpetas a camelCase y funciones jsx y llamar index.jsx