
export default function Table(props){

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {
                    props.showTypeTable === 1 ? (
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Hide
                        </th>
                    ) : (
                      <th>
                        <></>
                      </th>
                    )
                }
                {
                    props.showTypeTable === 1 ? (
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Works
                        </th>
                    ) : (
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Student
                        </th>
                    )
                }
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Progress
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Last Update
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Plan
                </th>
              </tr>
            </thead>
            <tbody>
              {
                props.data.map((e) => {

                  return (
                          <tr key={e.id}>
                            <td>
                                {
                                    props.showTypeTable === 1 ? (
                                        <button className="bg-sky-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-4" type="button">
                                            x
                                        </button>
                                    ) : (
                                        <></>
                                    )
                                }
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {e.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex flex-nowrap justify-between">
                                <input type="checkbox" class="appearance-none checked:bg-blue-500" />
                                <input type="checkbox" class="appearance-none checked:bg-blue-500" />
                                <input type="checkbox" class="appearance-none checked:bg-blue-500" />
                              </div>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {e.lastUpdate}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button className="bg-sky-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                              +
                            </button>
                            </td>
                          </tr>
                      )
                })
              }
            </tbody>
          </table>
        </>
    )
}