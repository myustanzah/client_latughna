import api from './config'


export async function addMedical(payload){
    let result = await api({
        method: 'POST',
        url: `/medical/add/${payload.id}`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            data: payload.data
        }
    })
    return result
}