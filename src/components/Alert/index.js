import closeX from '../../assets/imgs/close-x.svg'
import closeO from '../../assets/imgs/close-o.svg'
import checkPopUp from '../../assets/imgs/checkPopUp.svg'

export const AlertIncorrect = () => {
  return (
    <div className="">
      <div className="flex flex-col w-88. h-72 px-4 pt-4 pb-7 justify-items-center bg-orange-700 rounded-3xl items-center shadow-md">
        <img src={closeX} className="w-8 self-end"></img>
        <img src={closeO} className="w-22 mb-8"></img>
        <p className="text-white font-semibold text-center w-36 text-xl leading-6 ">
          El usuario y/o contraseña es incorrecto.
        </p>
      </div>
    </div>
  )
}

export const PopUp = () => {
  return (
    <div className="flex flex-col w-88. h-72 px-4 pt-4 pb-7 justify-items-center bg-orange-700 rounded-3xl items-center shadow-md">
      <img src={checkPopUp} className="w-8 self-end"></img>
      <img src={closeO} className="w-22 mb-8"></img>
      <p className="text-white font-semibold text-center w-36 text-xl leading-6 ">
        El usuario y/o contraseña es incorrecto.
      </p>
    </div>
  )
}
