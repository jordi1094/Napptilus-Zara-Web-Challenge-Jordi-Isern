"use client"
import style from "./button-dark.module.css"

export default function ButtonDark ({status, customHeight, children, onClick}) {
    
    return(
        <div onClick={status ? onClick: null} className={status ? style.buttonEnable : style.buttonDissable} style={{height : customHeight}}>
            {children}
        </div>
    )
}

// TODO mover components a app