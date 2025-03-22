import style from "./index.module.css";
import ButtonDark from "@/components/ButtonDark";
import ButtonLigth from "@/components/ButtonLigth";
import { useRouter } from "next/navigation";

export default function FooterCart({ products }) {
  const router = useRouter();

  const onClickLigthButton = () => {
    router.push("/");
  };

  const finalPrice =
    products.length > 0
      ? products.reduce((acumulador, producto) => {
          return acumulador + producto.selectedStorage.price;
        }, 0)
      : 0;

  const isEnable = () => {
    if (finalPrice > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={style.frame}>
      <div className={style.buttonLigth}>
        <ButtonLigth onClick={() => onClickLigthButton()} status>
          CONTINUE SHOPPING
        </ButtonLigth>
      </div>
      <div className={style.totalFrame}>
        <h6 className={style.text}>TOTAL</h6>
        <h6 className={style.text}>{finalPrice}</h6>
      </div>
      <div className={style.buttonDark}>
        <ButtonDark status={isEnable()}>PAY</ButtonDark>
      </div>
    </div>
  );
}
