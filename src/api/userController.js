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