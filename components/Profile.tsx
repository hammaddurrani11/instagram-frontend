import ProfileContent from "./subComponents/ProfileContent"
import ProfileHeader from "./subComponents/ProfileHeader"

interface ProfileProps {
    posts: any[];
}

const Profile = ({ posts }: ProfileProps) => {
    return (
        <div className="w-2/3 mx-auto">
            <ProfileHeader />
            <ProfileContent posts={posts} />
        </div>
    )
}

export default Profile