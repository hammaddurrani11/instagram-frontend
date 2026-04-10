import { useState } from "react";
import { register } from "../services/authService";
import { useRouter } from "next/router";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const registerUser = async (userData) => {
        try {
            setLoading(true);

            const response = await register(userData);

            if (response.data.success) {
                router.push('/');
            }
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
        registerUser,
        loading
    }
}