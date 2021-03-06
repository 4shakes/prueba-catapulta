import { useState } from 'react'
import { ButtonDownload } from '../../../components/Button/index'
import InputName from '../../../components/inputs/InputName'
import InputUploadImage from '../../../components/inputs/InputUploadImage'
import InputNameTextArea from '../../../components/inputs/InputNameTextArea'
import InputUploadImagePerfil from '../../../components/inputs/InputUploadImagePerfil'
import RowInfo from './RowInfo'
const ProfilePageTwo = () => {
  const [InfoCompanyItems, setInfoCompanyItems] = useState([
  ])
  const createNewInfo = (infoLabel, infoTextArea) => {
    if (!InfoCompanyItems.find(info => info.label === infoLabel)) {
      setInfoCompanyItems([...InfoCompanyItems, { label: infoLabel, textArea: infoTextArea }])
    }
  }
  const CompanyRowInfo = () => {
    return InfoCompanyItems.map(item => (
      <RowInfo label={item.label} area={item.textArea} key={item.label} />
    ))
  }
  return (
    <div className="w-full pb-8 md:max-w-280 lg:max-w-320 xl:max-w-360 mx-auto md:flex md:justify-center lg:justify-center px-3">
      <div className="flex flex-col md:flex-row md:justify-end md:mt-10 md:mb-8 md:gap-x-10 " >
        <InputUploadImagePerfil />
        <div className="mx-7 md:border-l-2 md:pl-15 lg:w-200" >
          <h2 className="text-2xl text-primary font-bold mb-4">Datos Generales</h2>
          <div className=" lg:flex  lg:gap-13">
            <div className="lg:w-1/2">
              <InputName labelName='Nombre del Principio 1' placeholder='' />
            </div>
            <div className="lg:w-1/2">
              <InputUploadImage text="Nombre del Principio 1" icon={true} button={true} />
            </div>
          </div>
          <h2 className="text-2xl text-primary font-bold my-4">Información de la Empresa</h2>
          <InputUploadImage text="Nombre del Principio 1" icon={false} button={true} />
          <InputNameTextArea callback={createNewInfo} />
          {CompanyRowInfo()}
          <div className="w-32 mx-auto mt-7">
            <ButtonDownload width="small" text="Siguiente" color='primary' outline={true} border='2' />
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProfilePageTwo
