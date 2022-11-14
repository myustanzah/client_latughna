import api from './config'

export async function addObjective(payload){
    let result = await api({
        method: 'POST',
        url: `/objective/add/${payload.id}`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            data: {
                name: payload.name,
                progresA: true,
                progresB: true,
                progresC: true,
                hide: false
            }
        }
    })
    return result
}

export async function hideObjective(params) {
    let result = await api({
        method: 'POST',
        url: `/objective/update/${params}`,
        headers: {
            token: localStorage.getItem('token')
        },
    })
    return result
}