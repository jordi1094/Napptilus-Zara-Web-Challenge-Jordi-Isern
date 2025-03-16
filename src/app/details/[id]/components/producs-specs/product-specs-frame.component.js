import ProductSpec from "./components/product-spec.component"
import style from "./product-specs-frame.module.css"

export default function ProductSpecsFrame ({specs}) {
    const spectsList = Object.keys(specs)
    console.log(specs)
    return (
        <div className={style.frame}>
            <h4 className={style.title}>SPECIFICATIONS</h4>
            <div className={style.spectsList}>
                {spectsList.map((specName, index)=> {
                    return(
                        <ProductSpec key={index} spect={specName} spectDescription={specs[specName]}/>
                        
                    )
                })}    
            </div>
        </div>
    )
}