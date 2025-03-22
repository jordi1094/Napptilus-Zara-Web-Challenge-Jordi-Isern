import SingleStorageSelector from "./SingleStorageSelector"
import styles from "./storage-selectors.module.css"

export default function StorageSelectors({storageOptions, setSelectedStorage, selectedStorage}) {
    
    return (
        <div className={styles.frame}>
            {storageOptions.map((storage, index) => {
                return (
                    <SingleStorageSelector key={index} storage={storage} onClick={()=>setSelectedStorage(storageOptions[index])} selectedStorage={selectedStorage}/>
                )
            })}
        </div>
    )
}