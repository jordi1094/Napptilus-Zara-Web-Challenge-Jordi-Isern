import styles from "./header.module.css"
import logo from  "@/assets/icons/logo.svg";
import Image from "next/image";
import CartButton from "./components/cart-button.component";


export default function Header() {
    
    return(
        <header className={styles.header}>
            <Image src={logo} alt="Logo from the brand MBST"/>
            <CartButton/>
        </header>
    )
}