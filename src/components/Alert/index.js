/* import closeX from '../../assets/imgs/close-x.svg'
import closeO from '../../assets/imgs/close-o.svg' */
import checkPopUp from '../../assets/imgs/checkPopUp.svg'
import { ButtonDownload } from '../Button'

export const PopUp = ({ title = 'Cuenta Creada', text = 'Se creó la cuenta de Lucrecia Santiago con éxito.' }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-80 h-90 px-5 pt-4 pb-7  justify-items-center bg-white items-center shadow-md">
        <img src={checkPopUp} className="w-22 my-8"></img>
        <p className="text-primary font-bold  text-3xl leading-6 mb-5">
          {title}
        </p>
        <p className="text-center text-on-warn-500 font-normal text-base mb-6">{text}</p>
        <ButtonDownload text="Aceptar" color="primary" outline={false} width="small" />
      </div>
    </div>
  )
}
