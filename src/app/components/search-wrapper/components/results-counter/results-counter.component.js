import style from "./results-counter.module.css"

export default function ResultsCounter({numOfPoducts}) {
    
    return (
        <p className={style.resultCounter}>{numOfPoducts} Results</p>
    )
}