

export default function HeaderReport(){

    return (
        <nav class="w-full flex flex-wrap items-center justify-between py-4 bg-gray-100text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div class="flex flex-row items-center" id="navbarSupportedContent">
                    <a class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
                        <img src={require('../../assets/logo.png')} style={{height: '150px'}} alt="image" />
                    </a>
                    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li class="nav-item p-2">
                            <p class="text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Lughatuna School</p>  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}