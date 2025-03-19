"use client"

import { useEffect, useState } from "react"
import CartItem from "./components/cart-iten/cart-item.component"


export default function Cart() {
    const [productsInCart, setProductsInCart] = useState([])

    useEffect(() => {
        setProductsInCart(localStorage.cart ? JSON.parse(localStorage.cart) : [])
    },[])
    return(
        <div>
            {productsInCart.map((product, index) => {
                return(
                    <CartItem key={index} product={product}/>
                )
            
            })}
        </div>
    )
}