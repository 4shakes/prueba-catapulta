import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../src/views/auth/Login'
import Layout from '../src/views/layout/Dashboard'
/* import excel from '../src/assets/images/excel.svg'
import UserInactive from '../src/assets/images/userActivate.svg'
import UserRegistered from '../src/assets/images/userRegistered.svg'
import UserActivate from '../src/assets/images/userInactive.svg'
import iconBreadcrumb from '../src/assets/images/iconBreadcrumb.svg'
import { ButtonOffice, ButtonDownload } from './components/Button/index'
import Card from '../src/components/Card'
import Breadcrumb from '../src/components/Breadcrumb'
import Title from '../src/components/Title' */
const App = () => {
  /*   const img = {
      urlOffice: excel,
      urlCard1: UserActivate,
      urlCard2: UserRegistered,
      urlCard3: UserInactive,
      iconBreadcrumb: iconBreadcrumb
    }
   */
  return (
    /*   <div className="flex flex-col gap-y-3 items-center">
        <ButtonOffice office={img.urlOffice} />
        <ButtonDownload text='Generar Reporte' width='large' color='second' outline={false} border='2' />
        <Card icon={img.urlCard2} color='gray-100' number='84' text='Usuarios inactivos' />
        <Breadcrumb route='BD Administrador' routeFinal='Juana Sofia' separador={img.iconBreadcrumb} />
        <Title title='Juana Sofia ' />
      </div> */
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Layout />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}
export default App
