import BackFrame from "./components/back-frame/back-frame.component"
import style from "./page.module.css"

export default function details({params}) {
    const { id } = params


    return (
        <div>
            <BackFrame/>
        </div>
    )
}