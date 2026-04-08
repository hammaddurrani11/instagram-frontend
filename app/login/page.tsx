import { LoginImage, Logo } from "@/public"
import Image from "next/image"
import Link from "next/link"

const Login = () => {
    return (
        <div className="flex flex-row px-10 py-10 items-center">
            <div className="w-3/4 border-r border-gray-300">
                <div className="w-full">
                    <Image src={Logo} alt="logo" width={130} height={100} />
                </div>
                <div className="w-full text-center mt-20">
                    <h4 className="text-6xl w-3/4 font-medium mx-auto">See everyday moments from your close friends.</h4>
                    <Image src={LoginImage} alt="login-image" className="w-1/2 mx-auto" />
                </div>
            </div>
            <div className="w-1/4 px-10">
                <div>
                    <h4 className="font-medium text-lg mb-2">Log into Instagram</h4>

                    <form className="flex flex-col gap-5">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-4"
                            placeholder="Mobile number, username or email"
                        />

                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-md p-4"
                            placeholder="Password"
                        />

                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-black/80 text-white py-3 rounded-md cursor-pointer"
                        >Log in</button>

                        <Link href={'/'}>Forgot password?</Link>
                    </form>
                    <Link
                        href={'/register'}
                        className="w-full block mt-10 text-center bg-black hover:bg-black/80 text-white py-3 rounded-md cursor-pointer"
                    >Create new Account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login