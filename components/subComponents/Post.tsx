import Image from "next/image"

const Post = ({ post }: { post: any }) => {
    const { picture, caption } = post;
    return (
        <main>
            <div className="bg-gray-100">
                <Image src={picture} width={1000} height={1000} alt="post-image" className="object-contain h-[500px] w-full" />
            </div>
            <div>
                <p className="text-sm mt-2 text-black/80">{caption}</p>
            </div>
        </main>
    )
}

export default Post