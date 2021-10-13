import React from 'react'

const InputTextArea = ({ labelName, placeholder }) => {
  return (
    <div className="">
      <label
        className=" text-lg tracking-tight font-bold text-on-warn"
        htmlFor="name"
      >{labelName}
      </label>

      <textarea
        className=" w-full border border-primary text-on-warn outline-none
         py-2 pl-4  focus:ring-2
         focus:ring-2 focus:ring-accent focus:border-accent-500" placeholder={placeholder}
      >
      </textarea>
    </div>
  )
}

export default InputTextArea
