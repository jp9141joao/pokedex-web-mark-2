import { Credits } from "@/components/Credits"
import { Hero } from "@/components/home/Hero"
import { Navbar } from "@/components/Navbar"


export const Home = () => (
    <div className="flex flex-col h-[calc(var(--vh,1vh)*97)] mx-[1.3em] my-[0.8em]">
        <Navbar />
        <Hero />
        <Credits />
    </div>
)