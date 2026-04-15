import { CommentIcon, LikeIcon, SaveIcon, ShareIcon } from "@/public"
import Image from "next/image"
import Link from "next/link"

const PostActions = ({ post }: { post: any }) => {
    return (
        <div className="flex flex-row justify-between pt-5 pb-5 border-b border-gray-300">
            <div className="flex flex-row gap-5">
                <div className="text-center">
                    <Link href={'#'}>
                        <Image src={LikeIcon} alt="like-icon" className="w-6 h-6" />
                    </Link>
                    <p className="text-xs">1.1k</p>
                </div>
                <div className="text-center">
                    <Link href={'#'}>
                        <Image src={CommentIcon} alt="comment-icon" className="w-6 h-6" />
                    </Link>
                    <p className="text-xs">100</p>
                </div>
                <div className="text-center">
                    <Link href={'#'}>
                        <Image src={ShareIcon} alt="share-icon" className="w-6 h-6" />
                    </Link>
                    <p className="text-xs">10</p>
                </div>
            </div>
            <div>
                <Link href={'#'}>
                    <Image src={SaveIcon} alt="save-icon" className="w-6 h-6" />
                </Link>
            </div>
        </div>
    )
}

export default PostActions