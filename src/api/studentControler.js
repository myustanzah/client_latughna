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