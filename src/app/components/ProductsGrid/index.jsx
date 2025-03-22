import ProductCard from "./components/ProductCard"
import style from "./index.module.css"

export default function ProductGrid({productsList}) {
    return (
        <div className={style.grid}>
            {productsList.map((product,index) => {
                return(
                    <ProductCard key={index} product={product}/>
                )
            })}
        </div>
    )
}