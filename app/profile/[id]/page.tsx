import Sidebar from "@/components/Sidebar";
import UserPofile from "@/components/UserPofile";

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="flex flex-row">
            <Sidebar />
            <UserPofile userId={id} />
        </div>
    )
}