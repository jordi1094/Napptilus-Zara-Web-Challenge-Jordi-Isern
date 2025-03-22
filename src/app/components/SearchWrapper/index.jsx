import styles from "./index.module.css"
import Search from "./components/Search";
import ResultsCounter from "./components/ResultsCounter";

export default function SearchWrapper({numOfPoducts, onSearch}) {
    
    return(
        <div className={styles.searchWrapper}>
            <Search onSearch={onSearch} />
            <ResultsCounter numOfPoducts={numOfPoducts}/>
        </div>
    )
}