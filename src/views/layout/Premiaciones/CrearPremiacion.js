import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import { ButtonDownload } from '../../../components/Button'
import InputUploadImage from '../../../components/inputs/InputUploadImage'

const CrearPremiacion = () => {
  return (
    <div className="">
      <Breadcrumb />
      <div className="w-full pb-8 md:max-w-280 mx-auto flex justify-center lg:justify-center px-3">
        <div className="flex md:justify-end md:mt-10 md:mb-8 md:gap-x-10 " >
          <div className="mx-7  md:pl-15 lg:w-200" >
            <h2 className="text-2xl text-primary text-center font-bold mb-6">Completa los datos de cada parte de la premiación</h2>
            <InputUploadImage button={true} icon={false} text="Parte 1" placeholder="Nombre de la Parte 1" textButton="Editar" />
            <InputUploadImage button={true} icon={false} text="Parte 2" placeholder="Nombre de la Parte 2" textButton="Editar" />
            <InputUploadImage button={true} icon={false} text="Parte 3" placeholder="Nombre de la Parte 3" textButton="Editar" />
            <InputUploadImage button={true} icon={false} text="Parte 4" placeholder="Nombre de la Parte 4" textButton="Editar" />
            <InputUploadImage button={true} icon={false} text="Parte 5" placeholder="Nombre de la Parte 5" textButton="Editar" />
            <InputUploadImage button={true} icon={false} text="Parte 6" placeholder="Nombre de la Parte 6" textButton="Editar" />
            <div className="w-64 mx-auto mt-7">
              <ButtonDownload width="large" text="CREAR PREMIACION" color='primary' outline={true} border='2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrearPremiacion
