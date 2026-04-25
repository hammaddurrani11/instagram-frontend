import AllPosts from "./AllPosts"

interface ProfileContentProps {
    posts: any[];
}

const ProfileContent = ({ posts }: ProfileContentProps) => {
    return (
        <div className="mt-10 border-t-2 border-[#DBDBDB] pt-5">
            <AllPosts posts={posts} />
        </div>
    )
}

export default ProfileContent