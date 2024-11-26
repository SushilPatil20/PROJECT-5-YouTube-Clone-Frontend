import api from "./api"

export const createVideo = async (videoData) => {
    try {
        const response = await api.post('/video/create', videoData, { headers: { 'Content-Type': 'multipart/form-data' } })
        return response.data
    } catch (error) {
        console.error("Error ", error.message);
    }
}


export const getAuthUserVideos = async (userId) => {
    try {
        const response = await api.get(`/video/getAuthUserVideos/${userId}`)
        return response.data
    } catch (error) {
        console.error("Error ", error.message);
    }
}

export const deleteVideo = async (videoId) => {
    try {
        const response = await api.delete(`/video/delete/${videoId}`);

        return response.status;
    } catch (error) {
        console.error("Error ", error.message);
    }
};


export const getAllVideos = async (page) => {
    try {
        const response = await api.get(`/video/get?page=${page}&limit=12`);
        return response.data;
    } catch (error) {
        console.error("Error ", error, message);
    }
}


export const getSingleVideo = async (videoId) => {
    try {
        const response = await api.get(`/video/get/${videoId}`);
        return response.data;
    } catch (error) {
        console.error("Error ", error.message);
    }
}