"use client"
import styles from "./CartButton.module.css"
import bagIconInactive from "@/assets/icons/bag-inactive.svg";
import bagIconActive from "@/assets/icons/bag-active.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import cart from "@/logic/cart";

export default function CartButton (){
    const [numOfProducts, setNumOfProducts] = useState(0)

    useEffect(() => {
        const quantityOfProductsInCart = cart.getQuantityOfProducts()

        setNumOfProducts(quantityOfProductsInCart)
    },[])

    return (
        <Link href={"/cart"} className={styles.box}>
            {numOfProducts === 0 ? <Image src={bagIconInactive} alt="Icon from bag empty"/> : <Image src={bagIconActive} alt="Icon from a bag full"/>}
            <p className={styles.text}>{numOfProducts}</p>
        </Link>
    )

}
