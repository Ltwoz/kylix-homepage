import { data } from "@/data/data";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="About" className="flex flex-col mt-6">
            <h1 className="text-xl font-semibold">Contact me</h1>
            <div className="flex flex-col mt-4">
                <div className="text-md">
                    <span className="font-semibold">Email : </span>
                    <Link href={`mailto:${data.user.contact.email}`}>
                        {data.user.contact.email}
                    </Link>
                </div>
                <div className="text-md">
                    <span className="font-semibold">Discord : </span>
                    <Link href={`${data.user.contact.discord.href}`}>
                        {data.user.contact.discord.name}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;
