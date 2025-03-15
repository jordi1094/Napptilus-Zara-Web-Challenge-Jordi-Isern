import style from "./results-counter.module.css"

export default function ResultsCounter({results}) {
    
    return (
        <p className={style.resultCounter}>{results.length} Results</p>
    )
}