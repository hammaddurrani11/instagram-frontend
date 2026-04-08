import { Bars, Create, Explore, Home, Logo, Messages, Notification, Profile, Reels, Search } from "@/public"
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
    return (
        <div className="px-10 w-1/5 relative border-r border-gray-300">
            <div className="fixed top-0 py-16">
                <div>
                    <Image src={Logo} alt="logo" width={130} height={100} />
                </div>
                <div className="flex flex-col gap-8 mt-10">
                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Home} alt="home" />
                        <span>Home</span>
                    </Link>

                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Search} alt="search" />
                        <span>Search</span>
                    </Link>

                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Explore} alt="explore" />
                        <span>Explore</span>
                    </Link>

                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Reels} alt="reels" />
                        <span>Reels</span>
                    </Link>

                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Messages} alt="message" />
                        <span>Messages</span>
                    </Link>

                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Notification} alt="notification" />
                        <span>Notifications</span>
                    </Link>

                    <Link href={'/create-post'} className="flex items-center gap-5">
                        <Image src={Create} alt="create" />
                        <span>Create</span>
                    </Link>

                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Profile} alt="profile" />
                        <span>Profile</span>
                    </Link>

                    <Link href={'/'} className="flex items-center gap-5">
                        <Image src={Bars} alt="bars" />
                        <span>More</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar