"use client"
import styles from "./cart-button.module.css"
import bagIconInactive from "@/assets/icons/bag-inactive.svg";
import bagIconActive from "@/assets/icons/bag-active.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartButton (){
    const [numOfProducts, setNumOfProducts] = useState(0)

    useEffect(() => {
        const cart = sessionStorage.cart ? JSON.parse(sessionStorage.cart) : []

        setNumOfProducts(cart.length)
        console.log(cart)
    },[])

    return (
        <Link href={"/cart"} className={styles.box}>
            {numOfProducts === 0 ? <Image src={bagIconInactive} alt="Icon from bag empty"/> : <Image src={bagIconActive} alt="Icon from a bag full"/>}
            <p>{numOfProducts}</p>
        </Link>
    )

}
