import api from "./api";

const createPost = async (postData) => {
    return api.post("/api/post/create-post", postData);
}

const getAllPost = async () => {
    return api.get("/api/post");
}

export {
    createPost,
    getAllPost
}