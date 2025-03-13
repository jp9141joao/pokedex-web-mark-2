import { Credits } from "@/components/Credits"
import { Hero } from "@/components/home/Hero"
import { Navbar } from "@/components/Navbar"
import { useEffect } from "react";


export const Home = () => {

    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh)
    },[]);

    return (
        <div className="flex flex-col h-[calc(var(--vh,1vh)*100)] mx-[1.3em] my-[0.8em]">
            <Navbar />
            <Hero />
            <Credits />
        </div>
    )
}