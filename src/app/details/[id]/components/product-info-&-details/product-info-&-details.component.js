"use client"
import { useState } from "react"
import style from "./product-info-and-img.module.css"
import Image from "next/image"

export default function ProducInfoAndDetails ({product}) {
    const {name, storageOptions, colorOptions } = product

    const [selectedColor, setSelectedColor] = useState(colorOptions[0])
    const [selectedStorage, setSelectedStorage] = useState(storageOptions[0])


    return (
        <div className={style.mainFrame}>
            <div className={style.imageFrame}>
                <Image src= {selectedColor.imageUrl} fill alt={`Image from ${name} in color ${selectedColor.name}`}/>
            </div>
            <div className={style.productInfoFrame}>
                <h4>{product.name}</h4>
            </div>
        </div>
    )
}