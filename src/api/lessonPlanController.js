import api from './config'

export async function getLessonPlanByStudent(payload){
    let result = await api({
        method: 'POST',
        url: '/lesson/get-by-student',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            studentId: payload
        }
    })
    return result
}

export async function addLessonPlan(payload){
    let result = await api({
        method: 'POST',
        url: '/lesson/add',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            studentId: payload.studentId,
            objectiveId: payload.objectiveId
        }
    })
    return result
}

export async function deleteLessonPlan(payload){
    let result = await api({
        method: 'POST',
        url: '/lesson/delete',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            studentId: payload.studentId,
            objectiveId: payload.objectiveId
        }
    })
    return result
}

export async function getIndexLessonPlan(payload){
    let result = await api({
        method: 'POST',
        url: '/lesson/index',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            filter: payload,
        }
    })
    return result
}

export async function storeQuickEntry(payload){
    let result = await api({
        method: 'POST',
        url: '/lesson/quick',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            studentId: payload.studentId,
            objectiveId: payload.objectiveId,
            comment: payload.comment,
            progress: payload.progress
        }
    })
    return result
}