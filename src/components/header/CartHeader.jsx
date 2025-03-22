import styles from "./CartHeader.module.css"
import logo from  "@/assets/icons/logo.svg";
import Image from "next/image";


export default function CartHeader() {
    
    return(
        <header className={styles.header}>
            <Image src={logo} alt="Logo from the brand MBST"/>
        </header>
    )
}