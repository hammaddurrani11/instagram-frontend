import { useState } from "react";
import { getUserById } from "../services/userService";

export const useUser = () => {
    const [loading, setLoading] = useState(false);

    const getUser = async (id) => {
        try {
            setLoading(true);

            const response = await getUserById(id);
            return response.data.user;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    }

    return {
        getUser,
        loading
    }
}