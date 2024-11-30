import api from "./api.js"


export const createComment = async (commentData) => {
    try {
        const response = await api.post("/comment/create", commentData, { headers: { 'Content-Type': 'application/json' } })
        return response.status
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Error creating comment. please check your internet connection.';
    }
}

export const getComments = async (videoId) => {
    try {
        const response = await api.get(`/comment/get/${videoId}`, { headers: { 'Content-Type': 'application/json' } })
        return response.data
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Error getting comment. please check your internet connection.';
    }
}


export const deleteComment = async (commentId) => {
    try {
        const response = await api.delete(`/comment/delete/${commentId}`, { headers: { 'Content-Type': 'application/json' } })
        return response.status
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Error getting comment. please check your internet connection.';
    }
}