import { PostImage } from "@/public"
import Image from "next/image"

const Post = () => {
    return (
        <div>
            <Image src={PostImage} alt="post-image" className="w-full h-full object-cover" />
        </div>
    )
}

export default Post