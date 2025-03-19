import style from "./page.module.css"
import BackButtonFrame from "./components/back-button-frame/back-button-frame.component"
import ProducInfoAndDetails from "./components/product-info-&-details/product-info-&-details.component"
import ProductSpecsFrame from "./components/producs-specs/product-specs-frame.component"
import Header from "@/components/header/header.component"
import logic from "@/logic/index"
import SimilarProducts from "./components/similar-products/similar-products.component"


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