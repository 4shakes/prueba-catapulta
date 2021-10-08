
import separador from '../../assets/imgs/iconBreadcrumb.svg'
const Breadcrumb = ({ route = 'BD Administrador', subRutaOne = 'Crear Nuevo' }) => {
  const listaBreadcrumb = [
    {
      nextRoute: subRutaOne,
      separador: separador
    }
  ]

  return (
    <div className="mx-8 mt-6">
      <ol className="list-reset flex flex-wrap">
        <li><a href="#" className="font-bold text-accent text-lg">{route}</a></li>
        {listaBreadcrumb.map((lista) => (
          <>
            <li><img className="mx-2 mt-1" src={lista.separador} /></li>
            <li className="font-bold text-on-warn text-lg">{lista.nextRoute}</li>
          </>
        ))}
      </ol>
    </div>
  )
}

export default Breadcrumb
