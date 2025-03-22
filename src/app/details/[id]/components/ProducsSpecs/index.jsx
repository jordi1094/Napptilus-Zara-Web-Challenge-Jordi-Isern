import ProductSpec from "./components/ProductSpec"
import style from "./index.module.css"

export default function ProductSpecsFrame ({specs}) {
    const spectsList = Object.keys(specs)
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