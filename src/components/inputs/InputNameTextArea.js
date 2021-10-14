import { useState } from 'react'
import iconSuma from '../../assets/imgs/iconSuma.svg'
const InputNameTextArea = ({ text = 'Parte 1', placeholderText = 'titulo', placeholderArea = 'descripcion', callback }) => {
  const [newInfoText, setNewInfoText] = useState('')
  const updateNewInfoText = e => setNewInfoText(e.target.value)

  const [newInfoArea, setNewInfoArea] = useState('')
  const updateNewInfoArea = e => setNewInfoArea(e.target.value)

  const createNewInfoText = () => {
    callback(newInfoText, newInfoArea)
    setNewInfoText('')
    setNewInfoArea('')
  }

  return (
    <div className="mb-4">
      <label
        className=" text-lg tracking-tight font-bold text-on-warn"
        htmlFor="name"
      >{text}
      </label>
      <div className="flex mb-2">
        <input
          className=" text-on-warn w-full border border-primary  outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-administrator-400"
          name="name"
          type="text"
          id="name"
          placeholder={placeholderText}
          value={newInfoText}
          onChange={updateNewInfoText}
        />
        <button onClick={createNewInfoText}> <img src={iconSuma} className="cursor-pointer self-center ml-2" /></button>
      </div>
      <textarea
        className=" w-full border border-primary text-on-warn outline-none
         py-2 pl-4  focus:ring-2
         focus:ring-2 focus:ring-accent focus:border-accent-500" placeholder={placeholderArea}
        value={newInfoArea}
        onChange={updateNewInfoArea}
      >
      </textarea>
    </div>
  )
}

export default InputNameTextArea
