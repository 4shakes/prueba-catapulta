
import React, { useState } from 'react'
import iconSuma from '../../assets/imgs/iconSuma.svg'
const InputUploadImage = () => {
  const [activateButton, setActivateButton] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const handleClickActivate = () => {
    setActivateButton(true)
  }
  const handelClickAlert = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }
  return (
    <div className="my-3 mx-1">
      <div>
        <label
          className="text-on-warn text-lg tracking-tight font-bold "

        >Imagen del Pricipio 1
        </label>
      </div>
      <div className="w-full  flex ">
        <input
          className="w-7/12 md:w-4/6 border border-accent text-on-warn outline-none
                py-2 pl-4  focus:ring-2 
                focus:ring-2 focus:ring-accent focus:border-accent-500"
          name="name"
          type="text"
        />
        <button
          type="button"
          disabled={activateButton}
          className={`flex-1 tracking-tight px-3 ${activateButton ? 'bg-accent' : 'bg-on-warn'} 
                    text-white text-sm bock h-5/6 p-3 mr-2`}
          onClick={handelClickAlert}
        >Subir imagen</button>
        <img
          src={iconSuma}
          className="cursor-pointer"
          onClick={handleClickActivate}
        />
      </div>
      {(showAlert) && <div className="text-center border-primary bg-primary py-4 text-white">
        Debe de agregar la imagen para poder subirla
      </div>}
    </div>
  )
}

export default InputUploadImage
