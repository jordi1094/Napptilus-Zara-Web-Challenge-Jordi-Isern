import backIcon from "@/assets/icons/back.svg"
import style from "./back-frame.module.css"
import Link from "next/link"
import Image from "next/image"

export default function BackFrame () {
    return(
        <div className={style.frame}>
            <Link href="/" className={style.link}>
                <Image src={backIcon} className={style.icon}></Image>
                <h6 className={style.title}>BACK</h6>
            </Link>
        </div>
    )
}