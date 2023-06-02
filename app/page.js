import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Skills from "@/components/Sections/Skills";
import { data } from "@/data/data";
import Image from "next/image";

export default function Home() {
    return (
        <main className="max-w-[550px] mx-auto px-4 md:px-2 py-8">
            <section
                id="Header"
                className="flex flex-col justify-center items-center"
            >
                <Image
                    src={data.user.avatar}
                    alt="avatar"
                    width={500}
                    height={500}
                    className="rounded-full w-[220px] h-[220px]"
                />
                <h1 className="text-3xl font-bold mt-6">
                    Hey there, I&apos;m{" "}
                    <span className="text-orange-500">{data.user.name}</span>
                </h1>
            </section>
            <About />
            <Skills />
            <Contact />
        </main>
    );
}
