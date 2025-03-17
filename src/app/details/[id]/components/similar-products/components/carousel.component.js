import ProductCard from "@/app/components/products-grid/components/product-card.component"
import style from "./carousel.module.css"

export default function Carousel ({similarProducts}){
    return (
        <div className={style.carousel}>
            {similarProducts.map((product, index) => {
                return(
                <ProductCard key={index} product={product}/>
                )
            })}
        </div>
    )
}