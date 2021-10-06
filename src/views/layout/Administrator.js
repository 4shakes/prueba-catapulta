import IconSearch from '../../assets/imgs/iconSearch.svg'
import { ButtonDownload } from '../../components/Button/index'
const Administrator = () => {
  return (
    <div className="px-6 sm:px-10 py-8">
      <div className="flex flex-col gap-y-6">
        <div className="relative flex flex-col sm:flex-row gap-6">
          <img className="absolute left-3 top-3" src={IconSearch} alt="" />
          <input
            className="  w-full text-label-300 font-semibold border-2 border-label-300 rounded-lg  outline-none py-2 pl-10  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-label-500"
            name="name"
            type="text"
            id="name"
            placeholder="Buscar por número de DNI o Área"
          />
          <ButtonDownload text="CREAR NUEVO" color="administrator" width="small" />
        </div>
        <select className="border h-12 self-center w-40 px-6 border-administrator text-lg text-administrator font-bold" value="Filtrar">
          <option className="font-bold text-center" disabled>Filtrar</option>
          <option >Adm. Nuevos</option>
          <option >Adm. Activos</option>
          <option >Adm. No Activos</option>
        </select>
        <section className="container p-6 ">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead >
                  <tr className="text-md font-semibold tracking-wide text-administrator bg-white border border-administrator text-center">
                    <th className="px-4 py-3"></th>
                    <th className="px-4 py-3">Nombres</th>
                    <th className="px-4 py-3">Apellidos</th>
                    <th className="px-4 py-3">DNI</th>
                    <th className="px-4 py-3">Area</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border" >
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border">
                      Juana Sofía
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border"></td>
                    <td className="px-4 py-3 text-xs border">
                      {/* <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span> */}
                    </td>
                    <td className="px-4 py-3 text-sm border">6/4/2000</td>
                    <td className="px-4 py-3 text-sm border"><ButtonDownload /></td>
                  </tr>
                  {/* <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">27</td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">17</td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Nnacceptable </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">23</td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">20</td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> Pending </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">29</td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">38</td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">19</td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">21</td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}

export default Administrator
