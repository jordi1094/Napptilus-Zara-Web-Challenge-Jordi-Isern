import style from "./selector-frame.module.css"
import StorageSelectors from "./storage-selectors.component"
import ColorsSelectors from "./colors-selectors.component"

export default function SelectorsFrame({storageOptions, colorOptions, selectedStorage, selectedColor, setSelectedStorage, setSelectedColor}) {

    return(
        <div className={style.selectors}>
                    <div className={style.selectorFrame}>
                        <h5 className={style.selectorTitle}>STORAGE ¿HOW MUCH DO YOU NEED?</h5>
                        <StorageSelectors storageOptions={storageOptions} setSelectedStorage={setSelectedStorage} selectedStorage={selectedStorage}/>
                    </div>
                    <div className={style.selectorFrame}>
                        <h5 className={style.selectorTitle}>COLOR, PICK YOUR FAVOURITE</h5>
                        <ColorsSelectors colorOptions={colorOptions} setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
                        <p className={style.colorName}>{selectedColor ? selectedColor.name : " "}</p>
                    </div>
                </div>
    )
}