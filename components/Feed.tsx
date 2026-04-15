'use client'

import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import { usePost } from "@/hooks/usePost";

const Feed = () => {
    const { handleGetAllPost, loading } = usePost();
    const [posts, setPosts] = useState<any[]>([]);

    const fetchPost = async () => {
        const postData = await handleGetAllPost();
        setPosts(postData.posts);
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <div className="w-1/2">
            {!loading ? (
                posts.map((post: any) => {
                    return (
                        <PostCard key={post._id} post={post} />
                    )
                })
            ) : (
                <div>Loading Posts...</div>
            )}
        </div>
    )
}

export default Feed