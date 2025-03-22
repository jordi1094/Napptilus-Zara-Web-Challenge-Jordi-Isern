"use client";
import style from "./index.module.css";

export default function ButtonDark({
  status,
  customHeight,
  children,
  onClick,
}) {
  return (
    <div
      onClick={status ? onClick : null}
      className={status ? style.buttonEnable : style.buttonDissable}
      style={{ height: customHeight }}
    >
      {children}
    </div>
  );
}
