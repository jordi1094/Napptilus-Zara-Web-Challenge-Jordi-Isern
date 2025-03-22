import style from "./ProductSpec.module.css"

export default function ProductSpec ({spect, spectDescription}) {
    return (
        <div className={style.spect}>
            <h6 className={style.spectKey}>{spect.toUpperCase()}</h6>
            <p className={style.spectDescription}>{spectDescription}</p>
        </div>
    )
}