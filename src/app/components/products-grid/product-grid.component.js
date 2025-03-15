import ProductCard from "./components/product-card.component"
import style from "./product-grid.module.css"

export default function ProductGrid({productsList}) {
    return (
        <div>
            {productsList.map((product,index) => {
                return(
                    <ProductCard key={index} product={product}/>
                )
            })}
        </div>
    )
}