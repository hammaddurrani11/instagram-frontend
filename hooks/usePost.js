import { useState } from "react";
import { createPost, getAllPost } from "../services/postService";
import { useRouter } from "next/navigation";

export const usePost = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleCreatePost = async (postData) => {
        try {
            setLoading(true);

            const response = await createPost(postData);

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

    const handleGetAllPost = async () => {
        try {
            setLoading(true);

            const response = await getAllPost();
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    }

    const handleGetUserPost = async (userId) => {
        try {
            setLoading(true);

            const response = await getUserPost(userId);
            return response.data;
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
        handleCreatePost,
        loading,
        handleGetAllPost,
        handleGetUserPost
    }
}