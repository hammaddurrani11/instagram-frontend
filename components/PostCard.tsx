import Post from "./subComponents/Post"
import PostActions from "./subComponents/PostActions"
import PostHeader from "./subComponents/PostHeader"

const PostCard = () => {
    return (
        <div className="w-1/2 mx-auto pt-5">
            <PostHeader />
            <Post />
            <PostActions />
        </div>
    )
}

export default PostCard