import ProfilePhoto from '../../../components/ProfilePhoto'
import { ButtonDownload, ButtonOffice } from '../../../components/Button/index'
import Breadcrumb from '../../../components/Breadcrumb'
import Title from '../../../components/Title'
const AdministratorHistory = () => {
  /* RUTA QUE PUSE DE MODELO Y QUE NO FUNCIONA EN MI PROYECTO ES PARA QUE LO IMPLEMENTEN EN EL PROYECTO PRINCIPAL */
  const crumbs = [
    { path: '/administrador', label: 'BD Administrador' },
    { path: '/empleados/juana-sofia', label: 'Juana sofia' },
    { path: '/empleados/juana-sofia/historial', label: 'historial de votaciones' }
  ]
  /* RUTA QUE PUSE DE MODELO Y QUE NO FUNCIONA EN MI PROYECTO ES PARA QUE LO IMPLEMENTEN EN EL PROYECTO PRINCIPAL */
  return (
    <div className="">
      <Title title='Juana sofia' />
      <Breadcrumb crumbs={crumbs} />
      <div className="px-6 sm:px-10 py-8">
        <div className="flex flex-col gap-y-6">
          <div className="self-center">
            <ProfilePhoto />
          </div>
          <div className="mt-10 self-end">
            <ButtonOffice />
          </div>
          <section className="container ">
            <div className="mb-8 overflow-hidden  ">
              <div className="w-full overflow-x-auto">
                <table className="w-full  text-center">
                  <thead className=" shadow-2xl" >
                    <tr className="text-lg font-bold tracking-wide text-primary bg-white border border-on-warn-300 text-center ">
                      <th className="px-4 py-3 ">Trimestre</th>
                      <th className="px-4 py-3">Voto 1</th>
                      <th className="px-4 py-3">Voto 2</th>
                      <th className="px-4 py-3">Voto 3</th>
                    </tr>
                  </thead>
                  <tbody className="bg-on-warn-100 border border-on-warn-100 text-base">
                    <tr className="text-primary">
                      <td className="px-4 py-3 font-bold">
                        Abril - Junio / 2021
                      </td>
                      <td className="px-4 py-3">Carmen Anaís</td>
                      <td className="px-4 py-3">
                        Juan Pedro
                      </td>
                      <td className="px-4 py-3 ">Jack Carlos</td>
                      <td className="px-4 py-3">
                        <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                      </td>
                    </tr>
                    <tr className="text-primary">
                      <td className="px-4 py-3 font-bold">
                        Abril - Junio / 2021
                      </td>
                      <td className="px-4 py-3">Carmen Anaís</td>
                      <td className="px-4 py-3">
                        Juan Pedro
                      </td>
                      <td className="px-4 py-3 ">Jack Carlos</td>
                      <td className="px-4 py-3">
                        <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                      </td>
                    </tr>
                    <tr className="text-primary">
                      <td className="px-4 py-3 font-bold">
                        Abril - Junio / 2021
                      </td>
                      <td className="px-4 py-3">Carmen Anaís</td>
                      <td className="px-4 py-3">
                        Juan Pedro
                      </td>
                      <td className="px-4 py-3 ">Jack Carlos</td>
                      <td className="px-4 py-3">
                        <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                      </td>
                    </tr>
                    <tr className="text-primary">
                      <td className="px-4 py-3 font-bold">
                        Abril - Junio / 2021
                      </td>
                      <td className="px-4 py-3">Carmen Anaís</td>
                      <td className="px-4 py-3">
                        Juan Pedro
                      </td>
                      <td className="px-4 py-3 ">Jack Carlos</td>
                      <td className="px-4 py-3">
                        <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                      </td>
                    </tr>
                    <tr className="text-primary">
                      <td className="px-4 py-3 font-bold">
                        Abril - Junio / 2021
                      </td>
                      <td className="px-4 py-3">Carmen Anaís</td>
                      <td className="px-4 py-3">
                        Juan Pedro
                      </td>
                      <td className="px-4 py-3 ">Jack Carlos</td>
                      <td className="px-4 py-3">
                        <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                      </td>
                    </tr>
                    <tr className="text-primary">
                      <td className="px-4 py-3 font-bold">
                        Abril - Junio / 2021
                      </td>
                      <td className="px-4 py-3">Carmen Anaís</td>
                      <td className="px-4 py-3">
                        Juan Pedro
                      </td>
                      <td className="px-4 py-3 ">Jack Carlos</td>
                      <td className="px-4 py-3">
                        <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                      </td>
                    </tr>
                    <tr className="text-primary">
                      <td className="px-4 py-3 font-bold">
                        Abril - Junio / 2021
                      </td>
                      <td className="px-4 py-3">Carmen Anaís</td>
                      <td className="px-4 py-3">
                        Juan Pedro
                      </td>
                      <td className="px-4 py-3 ">Jack Carlos</td>
                      <td className="px-4 py-3">
                        <ButtonDownload color="primary" text="Ver Perfil" width="large" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <ButtonOffice />
        </div>
      </div >
    </div>
  )
}

export default AdministratorHistory
