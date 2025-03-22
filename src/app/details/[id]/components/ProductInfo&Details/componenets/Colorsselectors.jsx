import styles from "./ColorsSelectors.module.css"
import SingleColorSelector from "./SingleColorSelector"

export default function ColorsSelectors({colorOptions, setSelectedColor, selectedColor}){

    return (
        <div className={styles.frame}>
            <div className={styles.colorsOptionsFrame}>
                {colorOptions.map((color, index) => {
                    return (
                        <SingleColorSelector key={index} color={color} onClick= {() => {setSelectedColor(colorOptions[index])}} selectedColor={selectedColor}/>
                    )
                })}
            </div>
        </div>
    )
}