import Image from "next/image"

const Post = ({ post }: { post: any }) => {
    const { picture, caption } = post;
    return (
        <div>
            <Image src={picture} width={1000} height={1000} alt="post-image" className="object-cover h-[500px] w-full" />
            <p className="text-sm mt-2 text-black/80">{caption}</p>
        </div>
    )
}

export default Post