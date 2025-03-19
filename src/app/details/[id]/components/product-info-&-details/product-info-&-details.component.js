"use client"
import { useState } from "react"
import style from "./product-info-and-img.module.css"
import Image from "next/image"
import SelectorsFrame from "./componenets/selectors-frame.component"
import ProductInfoFrame from "./componenets/product-info-frame.component"
import AddToCartButton from "./componenets/add-to-cart-button.component"

export default function ProducInfoAndDetails ({product}) {
    const {name, storageOptions, colorOptions } = product
    const [selectedColor, setSelectedColor] = useState()
    const [selectedStorage, setSelectedStorage] = useState()

    return (
        <div className={style.mainFrame}>
            <div className={style.imageFrame}>
                <Image className={style.image} src= {selectedColor? selectedColor.imageUrl :colorOptions[0].imageUrl} fill alt={`Image from ${name} in color ${selectedColor ? selectedColor.name :colorOptions[0].name }`}/>
            </div>
            <div className={style.productInfoFrame}>
                <ProductInfoFrame product={product} selectedStorage={selectedStorage}/>
                <SelectorsFrame storageOptions={storageOptions} colorOptions={colorOptions} selectedStorage={selectedStorage} selectedColor={selectedColor} setSelectedStorage={setSelectedStorage} setSelectedColor={setSelectedColor}/>
                {//compo buttonaddtocard + logica add to cart
                }
                <AddToCartButton name={product.name} selectedColor={selectedColor} selectedStorage={selectedStorage}/>
            </div>
        </div>
    )
}