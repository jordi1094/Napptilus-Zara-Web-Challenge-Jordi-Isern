import styles from "./colors-selectors.module.css"
import SingleColorSelector from "./single-color-selector.component"

export default function ColorsSelectors({colorOptions, setSelectedColor, selectedColor}){

    return (
        <div>
            <div className={styles.colorsOptionsFrame}>
                {colorOptions.map((color, index) => {
                    console.log(color.name)
                    return (
                        <SingleColorSelector key={index} color={color} onClick= {() => {setSelectedColor(colorOptions[index])}} selectedColor={selectedColor}/>
                    )
                })}
            </div>
            <p>{selectedColor.name}</p>
        </div>
    )
}