import { useState } from 'react'
import iconSuma from '../../assets/imgs/iconSuma.svg'
const InputNameTextArea = (text = 'Area de la Empresa', placeholderText = 'sadas', placeholderArea = 'asdas') => {
  const [newInfoCompany, setNewInfoCompany] = useState('')
  const updateNewInfoCompany = e => setNewInfoCompany(e.target.value)

  const createNewInfoCompany = () => {
    console.log(newInfoCompany)
    setNewInfoCompany('')
  }
  return (
    <div className="mb-4">
      {/*  <label
        className=" text-lg tracking-tight font-bold text-on-warn"
        htmlFor="name"
      >{text}
      </label> */}
      <div className="flex">
        <input
          className=" text-on-warn w-full border border-primary  outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-administrator-400"
          name="name"
          type="text"
          id="name"
          placeholder={placeholderText}
          value={newInfoCompany}
          onChange={updateNewInfoCompany}
        />
        <button onClick={createNewInfoCompany}> <img src={iconSuma} className="cursor-pointer self-center ml-2" /></button>
      </div>
      <textarea
        className=" w-full border border-primary text-on-warn outline-none
         py-2 pl-4  focus:ring-2
         focus:ring-2 focus:ring-accent focus:border-accent-500" placeholder={placeholderArea}
      >
      </textarea>
    </div>
  )
}

export default InputNameTextArea
