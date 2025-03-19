import Credits from "@/components/Credits"
import NavbarLoggedOut from "@/components/navbar/NavbarLoggedOut"
import  Content  from "@/components/home/Content"
import { ScrollProvider } from "@/components/home/ScrollContext";
import { useEffect } from "react";


export default function Home() {

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
        <div 
            className="
                flex flex-col items-center
                min-h-[90vh] h-[calc(var(--vh,1vh)*96)] sm:h-[calc(var(--vh,1vh)*95)] 
                mx-[1.3em] sm:mx-[1.8em] my-[0.8em] sm:my-[1.1em] 
                overflow-hidden
            "
        >
            <ScrollProvider>
                <NavbarLoggedOut />
                <Content />
                <Credits />
            </ScrollProvider>
        </div>
    )
}