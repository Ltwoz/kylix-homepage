/* eslint-disable @next/next/no-img-element */
import { data } from "@/data/data";
const Skills = () => {
    return (
        <section id="Skills" className="flex flex-col mt-6">
            <h1 className="text-xl font-semibold border-b-4 border-orange-500 w-max">Skills</h1>
            <div className="flex flex-col space-y-2 mt-4">
                <div id="Languages" className="flex flex-col space-y-2">
                    <h3 className="text-md font-semibold">Languages</h3>
                    <div className="flex flex-wrap">
                        {data.skills.languages.map((item) => (
                            <img src={item.src} alt={item.name} key={item.name} className="mr-2 mb-2" />
                        ))}
                    </div>
                </div>
                <div id="Framworks" className="flex flex-col space-y-2">
                    <h3 className="text-md font-semibold">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap">
                        {data.skills.frameworks.map((item) => (
                            <img src={item.src} alt={item.name} key={item.name} className="mr-2 mb-2" />
                        ))}
                    </div>
                </div>
                <div id="Databases" className="flex flex-col space-y-2">
                    <h3 className="text-md font-semibold">Databases</h3>
                    <div className="flex flex-wrap">
                        {data.skills.databases.map((item) => (
                            <img src={item.src} alt={item.name} key={item.name} className="mr-2 mb-2" />
                        ))}
                    </div>
                </div>
                <div id="Tools" className="flex flex-col space-y-2">
                    <h3 className="text-md font-semibold">Tools</h3>
                    <div className="flex flex-wrap">
                        {data.skills.tools.map((item) => (
                            <img src={item.src} alt={item.name} key={item.name} className="mr-2 mb-2" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
