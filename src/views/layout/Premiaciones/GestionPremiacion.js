import React from 'react'
import Title from '../../../components/Title'
import Premiacion from '../../../assets/imgs/premiacion.png'
const GestionPremiacion = () => {
  return (
    <div className="">
      <Title title='Partes de la Premiación' />
      <div className="w-full pb-8 mt-10  md:max-w-280 mx-auto flex justify-center items-center lg:justify-center px-3">
        <div className="w-120  shadow-2xl" >
          <img className="w-full" src={Premiacion} alt="" />
          <p className="flex h-20 flex-col items-center justify-center text-3xl sm:text-4xl font-semibold text-on-warn-400">Reconocimientos<br /><small className="text-base text-primary -mt-1">Principal</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GestionPremiacion
