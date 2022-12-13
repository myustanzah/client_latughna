import { useDispatch, useSelector } from 'react-redux'
import { url_image } from '../../../api/api'
import { fungsiAddContact } from '../../../store/actionCreator'


export default function DisplayStudent({isStudent, setIsStudent}){
    const studentsData = useSelector(state => state.StudentReducer.studentData)
    const selectStudent = useSelector(state => state.StudentReducer.selectStudent)
    const dispatch = useDispatch()

    function handleIsStudent(){
        setIsStudent(false)
    }

    function enableEdit(){
        dispatch(fungsiAddContact(true))
    }

    return (
        <div className="flex flex-row">
            <div className="w-40 h-40 mr-5">
                {/* <img src={require('../../../assets/Profile-Male-PNG.png')} alt="" className="w-40 h-40" /> */}
                    {
                        !studentsData[selectStudent].imgProfil ? (
                            <img src={require('../../../assets/Profile-Male-PNG.png')} alt="profil" className="w-40 h-40" />
                        ) : (
                            <img src={`${url_image}/student/${studentsData[selectStudent].imgProfil}`} alt="profil" className="w-40 h-40" />
                        )
                    }
            </div>
            <div className="">
                <h1>NAMA STUDENT</h1><br />
                <button onClick={()=> {
                    enableEdit()
                    handleIsStudent()
                }}><i className="fa-solid fa-pen-to-square"></i>Edit</button>
            </div>
        </div>
    )
}