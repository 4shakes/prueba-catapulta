import React from 'react'
import { ButtonDownload } from '../Button'

const InputUploadImagePerfil = () => {
  return (
    <div className=" my-10 flex flex-col justify-center items-center md:justify-start gap-y-6">
      <div className="w-44 h-44 sm:w-52 sm:h-52 border-2 border-accent rounded-full ">
        <img src="" />
      </div>
      <ButtonDownload width="small" text="Cambiar" color='second' outline={false} />
    </div>
  )
}

export default InputUploadImagePerfil
