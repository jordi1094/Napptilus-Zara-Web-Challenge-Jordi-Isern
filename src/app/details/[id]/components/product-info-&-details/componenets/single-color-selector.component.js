import styles from "./single-color-selector.module.css"

export default function SingleColorSelector ({color, selectedColor, onClick}){
    let status = false
    const {hexCode} = color
    if(hexCode === selectedColor.hexCode){
        status = true
    }

    return (
        <div onClick={onClick} className={status ? styles.selected : styles.unselected} >
            <div className={styles.color} style={{ backgroundColor: hexCode }}></div>
            
        </div>
    )
}