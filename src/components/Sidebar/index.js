import logo from '../../assets/imgs/logo.svg'
import iconDashboard from '../../assets/imgs/icon-dashboard.svg'
import iconProfile from '../../assets/imgs/icon-profile.svg'
import iconCompanies from '../../assets/imgs/icon-companies.svg'
import iconNews from '../../assets/imgs/icon-news.svg'
import Title from '../../components/Title'
import Header from '../../components/Header'
/* import Profile from '../../views/layout/Profile' */
/* import ProfilePageTwo from '../../views/layout/ProfilePageTwo' */
/* import Administrator from '../../views/layout/Administrator' */
import NewAdministrator from '../../views/layout/NewAdministrator'

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
        <Title title='Perfil' />

        {/* Parte donde van las vistas del proyecto   */}
        {/* <Profile /> */}
        {/* <ProfilePageTwo /> */}
        {/* <Administrator /> */}
        <NewAdministrator />
      </div>
    </div>
  )
}

export default index
