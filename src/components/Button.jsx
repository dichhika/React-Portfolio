import React from 'react'

const Button = ({children, btnStyle}) => {
  return (
    <div className="btn">
        <button className={btnStyle}>{children}</button>
    </div>
  )
}

export default Button