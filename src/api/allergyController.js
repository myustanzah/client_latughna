import api from './config'


export async function addAllergy(payload){
    let result = await api({
        method: 'POST',
        url: `/allergy/add/${payload.id}`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            data: payload.data
        }
    })
    return result
}