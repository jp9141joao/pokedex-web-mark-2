import { Credits } from "@/components/Credits"
import { Navbar } from "@/components/Navbar"
import  { Content } from "@/components/home/Content"
import { ScrollProvider } from "@/components/home/ScrollContext";
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
        <div className="flex flex-col h-[calc(var(--vh,1vh)*96)] mx-[1.3em] my-[0.8em] overflow-hidden">
            <ScrollProvider>
                <Navbar />
                <Content />
                <Credits />
            </ScrollProvider>
        </div>
    )
}