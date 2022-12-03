import api from './config'

export async function editComment(payload){
    let result = await api({
        method: 'PUT',
        url: `/comment/edit/${payload.id}`,
        data: {
            comment: payload.comment
        },
        headers: {
            token: localStorage.getItem('token')
        },
    })

    return result
}

export async function deleteComment(id){
    let result = await api({
        method: 'DELETE',
        url: `/comment/delete/${id}`,
        headers: {
            token: localStorage.getItem('token')
        },
    })

    return result
}