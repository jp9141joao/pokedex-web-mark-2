import { Credits } from "@/components/Credits"
import { Hero } from "@/components/home/Hero"
import { Navbar } from "@/components/Navbar"


export const Home = () => (
    <div className="grid gap-48 px-[1.3em] py-[0.8em]">
        <Navbar />
        <Hero />
        <Credits />
    </div>
)