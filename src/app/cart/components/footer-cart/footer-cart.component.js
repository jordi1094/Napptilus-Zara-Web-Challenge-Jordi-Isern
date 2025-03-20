import style from "./footer-cart.module.css"
import ButtonDark from "@/components/button-dark/button-dark.component"
import ButtonLigth from "@/components/button-ligth/button-ligth.component"
import { useRouter } from "next/navigation"

export default function FooterCart ({products}) {
    const router = useRouter()
    console.log(products)

    const onClickLigthButton = () => {
        router.push("/")
    }

    const finalPrice =products.length >0 ? products.reduce((acumulador, producto) => {
        return acumulador + producto.selectedStorage.price; 
    }, 0) : 0;

    const  isEnable = () =>{
        if(finalPrice > 0){
            return true
        }else{return false}
    }

    return (
        <div className={style.frame}>
            <ButtonLigth onClick={() =>onClickLigthButton()} className={style.ligthButton} status>CONTINUE SHOPPING</ButtonLigth>
            <div className={style.totalFrame}>
                <h6 className={style.text}>TOTAL</h6>
                <h6 className={style.text}>{finalPrice}</h6>
            </div>
            <ButtonDark status={isEnable()}>PAY</ButtonDark>
        </div>
    )
}