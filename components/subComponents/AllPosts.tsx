import Image from "next/image"

const AllPosts = ({ posts }: { posts: any[] }) => {
    return (
        <div className="grid grid-cols-3 gap-0 mb-10">
            {posts?.map((post, idx) => (
                <Image
                    src={post.picture}
                    alt="post-image"
                    width={280}
                    height={280}
                    key={idx}
                    className="w-full h-[300px] object-top object-cover"
                />
            ))}
        </div>
    )
}

export default AllPosts