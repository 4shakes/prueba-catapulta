import React from 'react'
import Title from '../../../components/Title'
import Breadcrumb from '../../../components/Breadcrumb'
import InputUploadImagePerfil from '../../../components/inputs/InputUploadImagePerfil'
import { ButtonDownload } from '../../../components/Button'
import InputName from '../../../components/inputs/InputName'
import InputTextArea from '../../../components/inputs/InputTextArea'

const PremiacionParte1 =
  () => {
    /* RUTA QUE PUSE DE MODELO Y QUE NO FUNCIONA EN MI PROYECTO ES PARA QUE LO IMPLEMENTEN EN EL PROYECTO PRINCIPAL */
    const crumbs = [
      { path: '/gestion-premiacion', label: 'Gestión de Premiaciones' },
      { path: '/gestion-premiacion/premiacion]', label: 'Premiación' },
      {
        path: '/gestion-noticias/comunicaciones/parte-1',
        label: 'Parte 1'
      }
    ]
    /* RUTA QUE PUSE DE MODELO Y QUE NO FUNCIONA EN MI PROYECTO ES PARA QUE LO IMPLEMENTEN EN EL PROYECTO PRINCIPAL */

    return (
      <div className="">
        <Title title='Partes de la Premiación' />
        <Breadcrumb crumbs={crumbs} />
        <div className="w-full pb-8 md:max-w-280 lg:max-w-320 xl:max-w-360 mx-auto md:flex md:justify-center lg:justify-center px-3">
          <div className="flex flex-col md:flex-row md:justify-end md:mt-10 md:mb-8 md:gap-x-10 " >
            <InputUploadImagePerfil border="dashed" text='Subir Icono' color='primary' />
            <div className="mx-7  md:pl-15 lg:w-200" >
              <h2 className="text-2xl text-primary font-bold mb-4">Completa los datos de la Parte 1</h2>
              <InputName labelName='Nombres' placeholder='' />
              <InputTextArea labelName='Ingresar el contenido de la parte 1' />
              <div className="w-64 mx-auto mt-7">
                <ButtonDownload width="small" text="GUARDAR" color='primary' outline={true} border='2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default PremiacionParte1
