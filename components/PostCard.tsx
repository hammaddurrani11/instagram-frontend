import Post from "./subComponents/Post"
import PostActions from "./subComponents/PostActions"
import PostHeader from "./subComponents/PostHeader"

const PostCard = ({ post }: { post: any }) => {
    return (
        <div className="w-1/2 mx-auto pt-5">
            <PostHeader post={post} />
            <Post post={post} />
            <PostActions post={post} />
        </div>
    )
}

export default PostCard