"use client"
import { useState } from "react"
import style from "./product-info-and-img.module.css"
import Image from "next/image"
import StorageSelectors from "./componenets/storage-selectors.component"

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
                <div className={style.titleAndPrice}>
                    <h4 className={style.title}>{product.name}</h4>
                    <h4 className={style.price}>{`${selectedStorage.price} EUR`}</h4>
                </div>
                <div className={style.selectors}>
                    <div className={style.storageSelectorFrame}>
                        <h5>STORAGE ¿HOW MUCH DO YOU NEED?</h5>
                        <StorageSelectors storageOptions={storageOptions} setSelectedStorage={setSelectedStorage} selectedStorage={selectedStorage}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}