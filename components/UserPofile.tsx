"use client";

import { usePost } from "@/hooks/usePost";
import Profile from "./Profile";
import { useEffect, useState } from "react";

interface UserProfileProps {
    userId: string;
}

const UserPofile = ({ userId }: UserProfileProps) => {
    const { handleGetUserPost } = usePost();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllPosts = async () => {
        try {
            setLoading(true);
            const response = await handleGetUserPost(userId);
            setPosts(response);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500" />
                </div>
            ) : (
                <Profile posts={posts} />
            )
            }
        </>
    )
}

export default UserPofile