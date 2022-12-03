import api from './config'

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
        return error
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

export async function editObservation(payload){
    let result = await api({
        method: 'PATCH',
        url: `/observation/edit/${payload.id}`,
        data: {
            description: payload.description
        },
        headers: {
            token: localStorage.getItem('token')
        },
    })
    return result 
}

export async function deleteObservation(payload){
    let result = await api({
        method: 'DELETE',
        url: `/observation/delete/${payload}`,
        headers: {
            token: localStorage.getItem('token')
        },
    })
    return result 
}

export async function addComment(payload){
    let result = await api({
        method: 'POST',
        url: `/comment/add/${payload.id}`,
        data: {
            description: payload.description
        },
        headers: {
            token: localStorage.getItem('token')
        },
    })
    return result 
}