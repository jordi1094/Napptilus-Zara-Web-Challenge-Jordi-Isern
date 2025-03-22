import Carousel from "./components/Carousel"
import style from "./index.module.css"

export default function SimilarProducts ({similarProducts}) {
    return (
        <div className={style.frame}>
            <h6 className={style.title}>SIMILAR ITEMS</h6>
            <Carousel similarProducts={similarProducts}/>
        </div>
    )
}