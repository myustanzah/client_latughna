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