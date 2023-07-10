import { Link } from "gatsby"
import React from "react"

type ButtonProps = {
  value: string
  btnClass: string
  isLink?: boolean
  linkTo?: any
  btnType?: "button" | "submit" | "reset"
  btnDisabled?: boolean
  btnClicked?: () => {}
}

function Button({
  value,
  isLink,
  btnClass,
  linkTo,
  btnType,
  btnDisabled = false,
  btnClicked
}: ButtonProps) {
  if (!isLink) {
    return (
      <button type={btnType} className={btnClass} disabled={btnDisabled}>
        {value}
      </button>
    )
  } else {
    return (
      <button type={btnType} className={btnClass} disabled={btnDisabled} onClick={btnClicked}>
        <Link to={linkTo}>{value}</Link>
      </button>
    )
  }
}

export default Button
