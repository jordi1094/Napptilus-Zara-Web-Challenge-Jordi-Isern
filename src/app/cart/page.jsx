"use client"
import style from "./page.module.css"
import { useEffect, useState } from "react"
import CartItem from "./components/CartIten"
import CartHeader from "@/components/header/CartHeader"
import cart from "@/logic/cart"
import CartCounter from "./components/CartCounter"
import FooterCart from "./components/FooterCart"


export default function Cart() {
    const [productsInCart, setProductsInCart] = useState([])

    const getProductsinCart = () => {
        const products = cart.getProdcuts()
            setProductsInCart(products)
        }

    useEffect(() => {getProductsinCart()},[])

    
    return(
        <div className={style.page}>
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