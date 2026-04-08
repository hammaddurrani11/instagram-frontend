import { DisplayPicture } from "@/public"
import Image from "next/image"

const PostHeader = () => {
    return (
        <div className="flex items-center justify-between py-4 w-full">
            <div className="flex gap-3 items-center">
                <Image src={DisplayPicture} alt="display-picture" className="w-10 h-10 rounded-full" />
                <p className="font-medium text-sm text-black">lewishamilton</p>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-50 w-52 p-2 shadow-lg border border-base-content/10">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default PostHeader