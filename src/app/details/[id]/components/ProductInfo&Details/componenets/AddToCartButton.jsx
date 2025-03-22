"use client"
import ButtonDark from "@/components/button-dark/button-dark.component"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import cart from "@/logic/cart"

export default function AddToCartButton ({name, selectedColor, selectedStorage}) {
    const [addCartButtonStatus, setAddCartButtonStatus] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
        if (selectedColor && selectedStorage){
            setAddCartButtonStatus(true)         
        }
    },[selectedColor, selectedStorage])

    const onclickAddToCart = (name, selectedColor, selectedStorage)=>{

        const productTobuy = {
            name,
            selectedColor,
            selectedStorage
        }
        cart.addProduct(productTobuy)

        router.push("/cart")
    }

    return (
        <ButtonDark onClick={() =>onclickAddToCart(name, selectedColor, selectedStorage)}status={addCartButtonStatus} customHeight={"56px"}>AÑADIR</ButtonDark>
    )
}