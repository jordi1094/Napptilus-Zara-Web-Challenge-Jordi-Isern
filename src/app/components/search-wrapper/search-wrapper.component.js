import styles from "./search-wrapper.module.css"
import Search from "./components/search/search.component";
import ResultsCounter from "./components/results-counter/results-counter.component";
const productsList = [0,1,2,3,4,5]

export default function SearchWrapper() {
    
    return(
        <div className={styles.searchWrapper}>
            <Search/>
            <ResultsCounter results={productsList}/>
        </div>
    )
}