"use client"
import Image from "next/image"
import styles from "./search.module.css"
import cross from "@/assets/icons/cross.svg"
import { useState } from "react"

export default function Search() {
    const [inputValue, setInputValue] = useState("")
    
    function clearInputValue() {
        setInputValue("")
    }

    function handleInputChange(event){
        setInputValue(event.target.value)
    }

    return (
        <div className={styles.searchBox}>
            <input className={styles.input} value={inputValue} onChange={handleInputChange} placeholder="Search for a smartphone..."/>
            <Image onClick={clearInputValue} className={styles.cross}src={cross} alt="Cross icon to clear the input"/>
        </div>
    )
}