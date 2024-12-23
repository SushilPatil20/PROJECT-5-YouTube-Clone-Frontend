import api from "./api";

// Reusable Function to Handle Errors
const handleError = async (error) => {
    if (error.response) {
        console.error(`Error ${error.response.status}: ${error.response.data.error || "Server Error"}`);
        const serverError = await error.response.data.error
        return { status: false, serverError }
    } else if (error.request) {
        // No response was received
        console.error("No response from server.");
        return { success: false, message: "Unable to connect to the server. Please try again later." };
    } else {
        // Other errors
        console.error(`Error: ${error.message}`);
        return { success: false, message: "An unexpected error occurred. Please try again." };
    }
};

export const createVideo = async (videoData) => {
    try {
        const response = await api.post('/video/create', videoData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data
    } catch (error) {
        return handleError(error);
    }
};

export const getAuthUserVideos = async (userId) => {
    try {
        const response = await api.get(`/video/getAuthUserVideos/${userId}`);
        return response.data
    } catch (error) {
        return handleError(error);
    }
};

export const deleteVideo = async (videoId) => {
    try {
        const response = await api.delete(`/video/delete/${videoId}`);
        return response.status
    } catch (error) {
        return handleError(error);
    }
};

export const getAllVideos = async () => {
    try {
        const response = await api.get(`/video/get`);
        return response.data
    } catch (error) {
        return handleError(error);
    }
};

export const getSingleVideo = async (videoId) => {
    try {
        const response = await api.get(`/video/get/${videoId}`);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};

export const updateVideo = async (updatedVideoData, videoId) => {
    try {
        const response = await api.put(`/video/update/${videoId}`, updatedVideoData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data
    } catch (error) {
        return handleError(error);
    }
};


export const fetchSearchVideo = async (searchQuery) => {
    try {
        const response = await api.get(`/video/search?title=${searchQuery}`);
        return response.data
    } catch (error) {
        return handleError(error);
    }
}

export const fetchRecommendedVideos = async (videoId) => {
    try {
        const response = await api.get(`/video/recommended/${videoId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch recommended videos:', error);
    }
};

export const getFilteredVideos = async (category) => {
    try {
        const response = await api.get(`/video/filtered/${category}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch category wise videos', error);
    }
}