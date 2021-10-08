import React, { useState } from 'react'
import iconPath from '../../assets/imgs/Path.svg'
const InputCheck = ({ name, id, textLabel }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(e => !e)
  }
  return (
    <div className="flex justify-center">
      <input
        type="checkbox"
        name={name}
        id={id}
        className="hidden"
      />
      <label
        htmlFor={id}
        className=" cursor-pointer inline-block"
        onClick={handleShow}
      > {textLabel}
        <span className={` flex justify-center w-7 h-7 rounded-full 
                border-primary border-2 ${show && 'bg-warn border-none'}`
        }> 
          {(show) && <img className="w-3" src={iconPath} />}
        </span>
      </label>

    </div>
  )
}
export default InputCheck
