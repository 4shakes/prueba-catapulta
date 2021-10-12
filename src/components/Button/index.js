import excel from '../../assets/imgs/excel.svg'
export const ButtonOffice = ({
  type = 'button',
  office = excel,
  onClick = () => { }
}) => {
  console.log('onclick : ', onClick)
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        type={type}
        className="flex items-center font-semibold underline text-on-warn  text-label  gap-x-2 w-72 px-10"
      >
        <img src={office} alt="" />
        <p>Descargar Historial</p>
      </button>
    </div>
  )
}

export const ButtonDownload = ({
  type = 'button',
  text = 'Descargar',
  width = 'small',
  color = 'primary',
  border = '2',
  outline = false,
  onClick = () => { }
}) => {
  const bgOutline = `${outline ? `bg-transparent text-${color}-500` : `text-white  bg-${color}`}`

  if (width === 'small') {
    return (
      <button type={type} onClick={onClick} className={` ${bgOutline}   px-6 py-2  w-full rounded-md text-center border-${border} border-${color}-500 font-semibold text-base `} value={text} >
        {text}
      </button>
    )
  } else if (width === 'medium') {
    if (border === !'') {
      return (
        <button type={type} onClick={onClick} className={`${bgOutline} border${border} border-${color} px-9 py-1 tracking-widest w-full  rounded-md text-center  font-semibold text-md  `} value={text} >
          {text}
        </button>
      )
    } else {
      return (
        <button type={type} onClick={onClick} className={`${bgOutline} border border-${color} px-9 py-1 tracking-widest  w-full rounded-md text-center  font-semibold text-md  `} value={text} >
          {text}
        </button>
      )
    }
  } else if (width === 'large') {
    return (
      <button type={type} onClick={onClick} className={`${bgOutline} w-full px-8 py-2 tracking-wide   rounded-md text-center border-${border} border-${color} font-medium text-base`} value={text} >
        {text}
      </button>
    )
  }
}
