import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/assets/images/avatar-florence-shaw.jpg';
import avatar3 from '@/assets/images/avatar-lula-meyers.jpg';
import avatar4 from '@/assets/images/avatar-owen-garcia.jpg';
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto ">Where power meets
                    <span className="text-lime-400"> simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <FeatureCard
                        title="Real-time colaboration"
                        description="Work togheter seamlessly whith conflicts editing"
                        className="group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="-ml-6 z-40">
                                <Image className="rounded-full" src={avatar1} alt="img-1" />
                            </Avatar>
                            <Avatar className="-ml-6 z-30 border-indigo-500">
                                <Image className="rounded-full" src={avatar2} alt="img-2" />
                            </Avatar>
                            <Avatar className="-ml-6 z-20 border-amber-500">
                                <Image className="rounded-full" src={avatar3} alt="img-3" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image src={avatar4} alt="img-4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition" />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Interacting proptotyping"
                        description="Engage your clients with prototypes that for your users actions"
                        className="group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video src='/gif-incredible.mp4' autoPlay loop muted playsInline className="absolute bottom-full left-1/2 duration-500 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none " />
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerfoul commands to help you create designs more quickly"
                        className="group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28 group-hover:outline outline-2 outline-offset-4 outline-lime-400 translate-y-1 duration-500 transition">
                                <p className="text-black-500"></p> shift
                            </Key>
                            <Key className="w-14 group-hover:outline outline-2 outline-offset-4 outline-lime-400 translate-y-1 duration-500 transition">alt</Key>
                            <Key className="w-14 group-hover:outline outline-2 outline-offset-4 outline-lime-400 translate-y-1 duration-500 transition">C</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {
                        features.map(feature => (
                            <div key={feature} className="bg-neutral-900 border-border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center">
                                <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#100038;</span>
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
