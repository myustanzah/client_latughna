import api from './config'

export async function getStudent(){
    let result = await api({
        method: 'POST',
        url: '/student/index',
        headers: {
            token: localStorage.getItem('token')
        }
    })
    return result
}

export async function addStudent(payload){
    let result = await api({
        method: 'POST',
        url: '/student/add-student',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            user: {
                email: payload.email
            },
            student: payload.student
        }
    })
    return result
}

export async function hideStudent(payload){
    let result = await api({
        method: 'PATCH',
        url: `/student/${payload}`,
        headers: {
            token: localStorage.getItem('token')
        }
    })

    return result
}

export async function editStudent(payload){
    let result = await api({
        method: 'PUT',
        url: `/student/${payload.id}`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: payload.data
    })

    return result
}

export async function uploadProfileStudent(payload){
    try {
        let bodyFormData = new FormData()
            bodyFormData.append("file_upload",  payload.file)

        const config = {
            headers: { 
                'Content-Type': 'multipart/form-data' ,
                'token': localStorage.getItem('token')
            },

        }

        let result = await api.post(`/student/profile/${payload.id}`, bodyFormData, config)
        
        return result
        
    } catch (error) {
        return error
    }
}