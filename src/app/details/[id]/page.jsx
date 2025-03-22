import style from "./page.module.css"
import BackButtonFrame from "./components/BackButtonFrame"
import ProducInfoAndDetails from "./components/ProductInfoAndDetails"
import ProductSpecsFrame from "./components/ProducsSpecs"
import Header from "@/components/header/header"
import logic from "@/logic/index"
import SimilarProducts from "./components/similar-products"


export default async function details({params}) {
    params = await params

    const product = await logic.getProductDetails(params.id)
    return (
        <div>    
            <div className={style.page}>
                <Header/>
                <BackButtonFrame/>
                <div className={style.product}>
                    <ProducInfoAndDetails product={product}/>
                    <ProductSpecsFrame specs={product.specs}/>
                </div>
            </div>
            <SimilarProducts similarProducts={product.similarProducts}/>
        </div>
    )
}