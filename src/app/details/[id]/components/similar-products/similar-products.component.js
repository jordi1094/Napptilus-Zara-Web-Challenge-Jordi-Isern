import Carousel from "./components/carousel.component"
import style from "./similar-products.module.css"

export default function SimilarProducts ({similarProducts}) {
    console.log(similarProducts)
    return (
        <div className={style.frame}>
            <h6 className={style.title}>SIMILAR ITEMS</h6>
            <Carousel similarProducts={similarProducts}/>
        </div>
    )
}