import BackFrame from "./components/back-frame/back-frame.component"
import ProducInfoAndDetails from "./components/product-info-&-details/product-info-&-details.component"
import ProductSpecsFrame from "./components/producs-specs/product-specs-frame.component"
import style from "./page.module.css"
import logic from "@/logic/index"

export default async function details({params}) {
    params = await params

    const product = await logic.getProductDetails(params.id)


    return (
        <div className={style.page}>
            <BackFrame/>
            <div className={style.product}>
                <ProducInfoAndDetails product={product}/>
                <ProductSpecsFrame specs={product.specs}/>
            </div>
        </div>
    )
}