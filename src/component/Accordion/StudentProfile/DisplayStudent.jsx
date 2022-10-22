export default function DisplayStudent({isStudent, setIsStudent}){

    function handleIsStudent(){
        setIsStudent(false)
    }

    return (
        <div className="flex flex-row">
            <div className="w-40 h-40 mr-5">
                <img src={require('../../../assets/Profile-Male-PNG.png')} alt="" className="w-40 h-40" />
            </div>
            <div className="">
                <h1>NAMA STUDENT</h1><br />
                <button onClick={handleIsStudent}><i class="fa-solid fa-pen-to-square"></i>Edit</button>
            </div>
        </div>
    )
}