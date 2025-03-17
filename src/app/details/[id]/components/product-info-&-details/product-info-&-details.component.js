"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import style from "./product-info-and-img.module.css"
import Image from "next/image"
import StorageSelectors from "./componenets/storage-selectors.component"
import ColorsSelectors from "./componenets/colors-selectors.component"
import ButtonDark from "@/components/button-dark/button-dark.component"

export default function ProducInfoAndDetails ({product}) {
    const {name, storageOptions, colorOptions, id } = product
    const router = useRouter()

    const [selectedColor, setSelectedColor] = useState()
    const [selectedStorage, setSelectedStorage] = useState()
    const [addCartButtonStatus, setAddCartButtonStatus] = useState(false)

    useEffect(() => {
        if (selectedColor && selectedStorage){
            setAddCartButtonStatus(true)         
        }
    },[selectedColor, selectedStorage])
    
    const onclickAddToCart = async (id, selectedColor, selectedStorage)=>{
        let productsInCart = []
        const productTobuy = {
            id,
            selectedColor,
            selectedStorage
        }
        if (sessionStorage.cart) {
            productsInCart = JSON.parse(sessionStorage.cart)
        }
        productsInCart.push(productTobuy)
        sessionStorage.cart = await JSON.stringify(productsInCart)
    }

    return (
        <div className={style.mainFrame}>
            <div className={style.imageFrame}>
                <Image className={style.image} src= {selectedColor? selectedColor.imageUrl :colorOptions[0].imageUrl} fill alt={`Image from ${name} in color ${selectedColor ? selectedColor.name :colorOptions[0].name }`}/>
            </div>
            <div className={style.productInfoFrame}>
                <div className={style.titleAndPrice}>
                    <h4 className={style.title}>{product.name.toUpperCase()}</h4>
                    <h4 className={style.price}>{`${selectedStorage ? selectedStorage.price : product.basePrice} EUR`}</h4>
                </div>
                <div className={style.selectors}>
                    <div className={style.selectorFrame}>
                        <h5 className={style.selectorTitle}>STORAGE ¿HOW MUCH DO YOU NEED?</h5>
                        <StorageSelectors storageOptions={storageOptions} setSelectedStorage={setSelectedStorage} selectedStorage={selectedStorage}/>
                    </div>
                    <div className={style.selectorFrame}>
                        <h5 className={style.selectorTitle}>COLOR, PICK YOUR FAVOURITE</h5>
                        <ColorsSelectors colorOptions={colorOptions} setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
                        <p className={style.colorName}>{selectedColor ? selectedColor.name : " "}</p>
                    </div>
                </div>
                <ButtonDark onClick={() =>onclickAddToCart(id, selectedColor, selectedStorage)}status={addCartButtonStatus} customHeight={"56px"}>AÑADIR</ButtonDark>
            </div>
        </div>
    )
}