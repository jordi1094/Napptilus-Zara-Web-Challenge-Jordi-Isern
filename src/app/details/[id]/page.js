import BackFrame from "./components/back-frame/back-frame.component"
import ProducInfoAndDetails from "./components/product-info-&-details/product-info-&-details.component"
import style from "./page.module.css"
import logic from "@/logic/index"

export default async function details({params}) {
    const { id } = params
    const product = await logic.getProductDetails(id)


    return (
        <div>
            <BackFrame/>
            <ProducInfoAndDetails product={product}/>
        </div>
    )
}