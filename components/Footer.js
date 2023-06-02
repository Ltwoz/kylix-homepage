import { data } from "@/data/data";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="px-2 md:px-0 py-2 md:py-4 w-full bg-gray-100/30 border-t border-gray-300 backdrop-blur-md z-30">
            <div className="max-w-[550px] mx-auto px-2 md:px-0 flex justify-between items-center">
                <div className="text-sm font-medium text-black/60">
                    © 2023 Kylix, All rights reserved.
                </div>
                <div className="flex justify-center items-center gap-x-2">
                    <Link
                        href={`mailto:${data.user.contact.email}`}
                        name="email"
                        className="inline-block p-2 font-medium text-sm leading-tight rounded-full border border-gray-400/80 
                        transition duration-150 ease-in-out 
                        hover:bg-orange-500 hover:bg-opacity-10 hover:border-orange-500 active:scale-95"
                    >
                        <HiMail />
                    </Link>
                    <Link
                        href={data.user.contact.discord.href}
                        target="_blank"
                        name="discord"
                        className="inline-block p-2 font-medium text-sm leading-tight rounded-full border border-gray-400/80 
                        transition duration-150 ease-in-out 
                        hover:bg-orange-500 hover:bg-opacity-10 hover:border-orange-500 active:scale-95"
                    >
                        <FaDiscord />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
