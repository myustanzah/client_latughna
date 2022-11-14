import api from './config'
import qs from 'qs'

export async function addObservation(payload){
    try {
        let bodyFormData = new FormData()
        bodyFormData.append("file_upload",  payload.file)
        bodyFormData.append("data", JSON.stringify(payload.data))
    
        const config = {
                headers: { 
                    'Content-Type': 'multipart/form-data' ,
                    'token': localStorage.getItem('token')
                },
    
            }

        let result = await api.post('/observation/add', bodyFormData, config)
        
        return result
    } catch (error) {
        console.log(error)
    }
}

export async function getObservation(payload){
    let result = await api({
        method: 'POST',
        url: '/observation/index',
        data: {
            StudentId: payload
        },
        headers: {
            token: localStorage.getItem('token')
        },
    })
    return result 
}