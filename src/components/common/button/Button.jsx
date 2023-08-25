import React from 'react'
import './Button.css';

const Button = ({text,isOutlined}) => {
  return (
    <div>
          <button className={isOutlined? "outlined": "filled"}>{text}</button>
          

    </div>
  )
}

export default Button


