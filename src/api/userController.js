import api from './config'

export async function login(payload){
    let result = await api({
            method: 'POST',
            url: '/user/login',
            data: {
                email: payload.email,
                password: payload.password
            }
        })
    return result
} 

export async function getUser(){
    let result = await api({
        method: 'POST',
        url: '/user/index',
    })
    return result
}

export async function userRegister(payload){
    let result = await api({
        method: 'POST',
        url: '/user/register',
        data: payload
    })
    return result
}

export async function editUser(payload){
    let result = await api({
        method: 'POST',
        url: `/user/edit/${payload.id}`,
        data: payload.data
    })
    return result
}

export async function deleteUsers(payload){
    let result = await api({
        method: 'POST',
        url: `/user/delete/${payload}`,
    })
    return result
}

export async function resetPassword(payload){

    let result = await api({
        method: 'POST',
        url: '/user/reset-password',
        data: payload
    })
    return result
}