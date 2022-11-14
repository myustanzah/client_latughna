import api from './config'


export async function getArea(){
    let result = await api({
        method: 'POST',
        url: '/area/index',
        headers: {
            token: localStorage.getItem('token')
        },
    })
    return result
}

export async function addArea(payload){
    let result = await api({
        method: 'POST',
        url: '/area/add-area',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            user: {
                email: payload.email
            },
            areaData: {
                name: payload.area
            }
        }
    })
    return result
}

export async function updateHideArea(payload){
    let result = await api({
        method: 'POST',
        url: `/area/update-hide/${payload.id}`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            status: payload.status
        }
    })
    return result 
}