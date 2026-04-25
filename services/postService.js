import api from "./api";

const createPost = async (postData) => {
    return api.post("/api/post/create-post", postData);
}

const getAllPost = async () => {
    return api.get("/api/post");
}

const getUserPost = async (userId) => {
    return api.get(`/api/post/user/${userId}`);
}

export {
    createPost,
    getAllPost,
    getUserPost
}