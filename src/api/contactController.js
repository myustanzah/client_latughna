import api from './config'

export async function addContact(payload){
    let result = await api({
        method: 'POST',
        url: `/contact/add/${payload.id}`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: payload.data
    })

    return result
}

export async function uploadProfileContact(payload){
    try {
        let bodyFormData = new FormData()
            bodyFormData.append("file_upload",  payload.file)

        const config = {
            headers: { 
                'Content-Type': 'multipart/form-data' ,
                'token': localStorage.getItem('token')
            },

        }

        let result = await api.post(`/contact/profile/${payload.id}`, bodyFormData, config)
        
        return result
        
    } catch (error) {
        return error
    }
}