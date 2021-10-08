import React from 'react'
import { ButtonDownload } from '../Button'
import IconEye from '../../assets/imgs/iconEye.svg'
import IconDownload from '../../assets/imgs/iconDownload.svg'

const InputUploadImagePerfil = ({ border = 'solid', text = 'Cambiar', color = 'primary', perfil }) => {
  if (perfil) {
    return (
      <div className=" my-10 flex flex-col justify-center items-center md:justify-start gap-y-6">
        <div className="w-44 h-44 sm:w-52 sm:h-52  rounded-full ">
          <img src={perfil} />
        </div>
        <ButtonDownload width="small" text={text} color={color} outline={false} />
        <p className="mt-5 font-bold text-on-warn-500 flex gap-2">Historial de Votaciones
          <img src={IconEye} alt="" />
          <img src={IconDownload} alt="" />
        </p>
      </div >
    )
  } else {
    return (
      <div className=" my-10 flex flex-col justify-center items-center md:justify-start gap-y-6">
        <div className={`w-44 h-44 sm:w-52 sm:h-52 border-2 border-primary rounded-full border-${border}`}>
          <img src="" />
        </div>
        <ButtonDownload width="small" text={text} color={color} outline={false} />
      </div >
    )
  }
}

export default InputUploadImagePerfil
