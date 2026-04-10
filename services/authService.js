import api from "./api";

const register = async (userData) => {
    return api.post("/api/auth/register", userData);
}

const login = async (userData) => {
    return api.post("/api/auth/login", userData);
}

export {
    register,
    login
}