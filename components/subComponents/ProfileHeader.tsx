import Image from "next/image"
import { DisplayPicture } from "@/public"

interface ProfileHeaderProps {
    user: any;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
    return (
        <div className="flex gap-20 mt-10 items-center">
            <div>
                <Image src={user?.profilePicture ? user.profilePicture : DisplayPicture} alt="profile-pic" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-5 items-center">
                    <h4>{user?.username}</h4>
                    <button className="bg-[#EFEFEF] p-2 rounded-md text-sm font-semibold cursor-pointer">Edit Profile</button>
                </div>
                <div className="flex flex-row gap-5">
                    <h4><span className="font-semibold">10</span> posts</h4>
                    <h4><span className="font-semibold">100</span> followers</h4>
                    <h4><span className="font-semibold">100</span> following</h4>
                </div>
                <div className="flex flex-col">
                    <h3 className="capitalize">{user?.username}</h3>
                    <p>{user?.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader