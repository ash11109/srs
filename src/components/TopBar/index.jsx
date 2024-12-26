import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
    return (
        <div>
            <div className="sticky top-0 z-[9999999]">
                <div className='w-full bg-srs-primary md:table hidden shadow-sm'>
                    <div className='max-w-screen-xl mx-auto flex items-center justify-center d-flex gap-3'>
                        <a href="https://sysrootsolution.com/" target='blank'><FaFacebookF className='my-3 text-blue-100 hover:text-blue-500 cursor-pointer' /></a>
                        <a href="https://sysrootsolution.com/" target='blank'><FaTwitter className='my-3 text-xl text-blue-100 hover:text-blue-400 cursor-pointer' /></a>
                        <a href="https://sysrootsolution.com/" target='blank'><IoLogoInstagram className='my-3 text-xl text-blue-100 hover:text-yellow-500 cursor-pointer' /></a>
                        <a href="https://sysrootsolution.com/" target='blank'><FaLinkedinIn className='my-3 text-xl text-blue-100 hover:text-blue-300 cursor-pointer' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar