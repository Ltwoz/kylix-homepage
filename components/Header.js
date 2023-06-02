import Link from "next/link";
import { data } from "@/data/data";

const Header = () => {
    return (
        <nav className="sticky top-0 px-2 md:px-0 py-2 md:py-4 w-full bg-gray-100/30 border-b border-gray-300 backdrop-blur-sm z-30">
            <div className="max-w-[550px] mx-auto px-2 md:px-0">
                <div className="flex flex-row justify-between items-center">
                    <Link href="/" className="flex flex-col">
                        <div className="text-lg font-bold">{data.user.name}</div>
                        <div className="text-sm font-semibold text-gray-900/70">{data.user.role}</div>
                    </Link>
                    <div className="flex flex-row items-center space-x-4">
                        <Link href="/" className="font-semibold">
                            Home
                        </Link>
                        <Link href="/" className="font-semibold">
                            Works
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
