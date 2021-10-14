import ChicaPerfil from '../../assets/imgs/chicaPerfil.png'
const index = () => {
  return (
    <div className="w-44 h-44 sm:w-52 sm:h-52  rounded-full flex flex-col items-center gap-4">
      <img src={ChicaPerfil} />
      <div className="flex gap-2">
        <p className="text-primary font-bold text-lg">total de votaciones:</p>
        <p className="text-on-warn"> 5</p>
      </div>
    </div>
  )
}

export default index
