export default function Filter(){
    return (
        <>
            <div className="flex flex-col w-full bg-sky-50 my-6 shadow-lg rounded p-5 justify-between">
                <div className="flex flex-warp justify-between mb-2">
                    <div className="w-50">
                        <input className="mr-3" type="checkbox" />
                        <label>Show Observation</label>
                    </div>
                    <div className="w-50">
                        <input className="mr-3" type="checkbox" />
                        <label>Show Works</label>
                    </div>
                    <div className="w-50">
                        <input className="mr-3" type="checkbox" />
                        <label>Show Attendants</label>
                    </div>
                    <div className="w-50">
                        <input className="mr-3" type="checkbox" />
                        <label>Only Show Items With Photos</label>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-50">
                        <label>After</label>
                        <input className="mr-2 block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" />
                    </div>
                    <div className="w-50">
                        <label>Before</label>
                        <input className="mr-2 block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" />
                    </div>
                    <div className="w-50">
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}