import api from "./api";

const getUserById = async (id) => {
    return api.get(`/api/user/${id}`);
}

export {
    getUserById
}