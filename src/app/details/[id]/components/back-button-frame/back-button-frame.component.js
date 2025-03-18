"use client"
import backIcon from "@/assets/icons/back.svg"
import style from "./back-frame.module.css"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BackButtonFrame () {
    const router = useRouter()

    const goBack = () => {
         router.back()

    }
    return(
        <div className={style.frame} onClick={goBack}>
            <Image src={backIcon} className={style.icon} alt="Go back icon"></Image>
            <h6 className={style.title}>BACK</h6>
        </div>
    )
}