import api from "./api";

const register = async (userData) => {
    return api.post("/api/auth/register", userData);
}

export {
    register
}