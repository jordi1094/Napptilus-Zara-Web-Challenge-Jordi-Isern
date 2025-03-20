"use client"
import style from "./page.module.css"
import { useEffect, useState } from "react"
import CartItem from "./components/cart-iten/cart-item.component"
import CartHeader from "@/components/header/cart-header.component"
import cart from "../utils/cart"
import CartCounter from "./components/cart-counter/cart-counter.component"
import FooterCart from "./components/footer-cart/footer-cart.component"


export default function Cart() {
    const [productsInCart, setProductsInCart] = useState([])
    const [total, setTotal] = useState([])

    const getProductsinCart = () => {
        const products = cart.getProdcuts()
            setProductsInCart(products)
        }

    useEffect(() => {getProductsinCart()},[])

    
    return(
        <div>
            <CartHeader/>
            <div className={style.main}>
                <CartCounter productsInCart = {productsInCart}/>
            {productsInCart.map((product, index) => {
                return(
                    <CartItem key={index} product={product} index={index} onDeleteItem={getProductsinCart}/>
                )
                
            })}
            </div>
            <FooterCart products={productsInCart}/>
        </div>
    )
}