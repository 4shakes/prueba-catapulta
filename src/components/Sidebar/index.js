import logo from '../../assets/imgs/logo.svg'
import iconDashboard from '../../assets/imgs/icon-dashboard.svg'
import iconProfile from '../../assets/imgs/icon-profile.svg'
import iconCompanies from '../../assets/imgs/icon-companies.svg'
import iconNews from '../../assets/imgs/icon-news.svg'
import Header from '../../components/Header'
/* import Profile from '../../views/layout/Profile/Profile' */
/* import ProfilePageTwo from '../../views/layout/Profile/ProfilePageTwo' */
/* import Administrator from '../../views/layout/Administrator/Administrator' */
/* import AdministratorCheckOut from '../../views/layout/Administrator/AdministratorCheckOut' */
/* import NewAdministrator from '../../views/layout/Administrator/NewAdministrator' */
/* import AdministratorEditar from '../../views/layout/Administrator/AdministratorEditar' */
import AdministratorHistory from '../../views/layout/Administrator/AdministratorHistory'
/* import CrearPremiacion from '../../views/layout/Premiaciones/CrearPremiacion' */
/* import GestionPremiacion from '../../views/layout/Premiaciones/GestionPremiacion' */
/* import Premiacion from '../../views/layout/Premiaciones/Premiacion' */
/* import Premiacion from '../../views/layout/Premiaciones/Premiacion' */
/* import PremiacionParte1 from '../../views/layout/Premiaciones/PremiacionParte1' */
const links = [
  {
    url: iconDashboard,
    name: 'Dashboard'
  },
  {
    url: iconProfile,
    name: 'Perfil General'
  },
  {
    url: iconCompanies,
    name: 'BD Empresas'
  },
  {
    url: iconNews,
    name: 'Gestión de Noticias'
  }
]

const index = () => {
  return (
    <div className="flex">
      <div className="w-full sm:w-44 min-h-full hidden  flex-col border-r border-gray-400 shadow-xl md:flex">
        <img className="sm:w-4/5 my-8 self-center" src={logo}></img>
        <nav className="text-base font-semibold w-full">
          <ul className="flex flex-col pl-4  gap-y-4">
            {links.map((link) => (
              <li key={link.toString()} className="flex  items-center  pl-2 py-3 rounded-l-full ">
                <img className="" src={link.url} />
                <span className="text-2xl sm:text-base ml-2">{link.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-full">
        <Header />
        {/* Parte donde van las vistas del proyecto   */}
        {/* <Profile /> */}
        {/* <ProfilePageTwo /> */}
        {/* <Administrator /> */}
        {/* <NewAdministrator /> */}
        {/* <AdministratorCheckOut /> */}
        {/* <AdministratorEditar /> */}
        <AdministratorHistory />
        {/* <GestionPremiacion /> */}
        {/* <CrearPremiacion /> */}
        {/* <Premiacion /> */}
        {/*  <PremiacionParte1 /> */}
      </div>
    </div>
  )
}

export default index
