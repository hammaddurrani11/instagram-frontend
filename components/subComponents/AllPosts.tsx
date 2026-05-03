import Image from "next/image"

const AllPosts = ({ posts }: { posts: any[] }) => {
    return (
        <div className="grid grid-cols-3 gap-2 mb-10">
            {posts?.map((post) => (
                <Image src={post.picture} alt="post-image" width={280} height={280} className="w-full h-full object-cover" />
            ))}
        </div>
    )
}

export default AllPosts