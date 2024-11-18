import api from "./api.js"

export const createChannel = async (channelData) => {
    try {
        const response = await api.post("/channel/create", channelData, { headers: { 'Content-Type': 'application/json' } })
        return response.data
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Error creating channel. please check your internet connection.';
    }
}

export const getChannel = async (channelId) => {
    if (!channelId) {
        throw new Error("Channel Id is required.");
    }
    try {
        const response = await api.get(`/channel/getById/${channelId}`)
        return response.data
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Error fetching channel. please check your internet connection.';
    }
}

export const getChannelByHandle = async (handle) => {
    if (!handle) {
        throw new Error("handle is required.");
    }
    try {
        const response = await api.get(`/channel/getByHandle/${handle}`)
        return response.data
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Error fetching channel. please check your internet connection.';
    }
}

export const updateChannel = async (channelId, payload) => {
    if (!channelId) {
        throw new Error("Channel Id is required.");
    }
    try {
        await api.put(`/channel/update/${channelId}`, payload, { headers: { 'Content-Type': 'multipart/form-data' } })
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Error updating channel. please check your internet connection.';
    }
}