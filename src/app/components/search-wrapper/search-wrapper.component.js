import styles from "./search-wrapper.module.css"
import Search from "./components/search/search.component";
import ResultsCounter from "./components/results-counter/results-counter.component";

export default function SearchWrapper({numOfPoducts, onSearch}) {
    
    return(
        <div className={styles.searchWrapper}>
            <Search onSearch={onSearch} />
            <ResultsCounter numOfPoducts={numOfPoducts}/>
        </div>
    )
}