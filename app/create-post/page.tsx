import CreatePostForm from "@/components/CreatePost"
import Sidebar from "@/components/Sidebar"

const CreatePost = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <CreatePostForm />
        </div>
    )
}

export default CreatePost