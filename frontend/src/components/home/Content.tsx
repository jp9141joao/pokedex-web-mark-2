import Hero from "./Hero";
import AboutAnime from "./AboutAnime";
import { useScroll } from "./ScrollContext";
import { Button } from "../ui/button";
import AboutApi from "./AboutApi";

export default function Content() {
    
    const { scroll, setScroll } = useScroll();
    
    return (
        <div className="w-full max-w-[1536px] grid flex-grow">
            <div 
                className="w-full relative grid place-items-center gap-1"
            >
                <div 
                    className={`
                        transition-all duration-400 absolute
                        ${ 
                            scroll == "Right" ? "-translate-x-full opacity-0" : 
                            scroll == "Bottom" ? "-translate-y-[100vw] opacity-0" :
                            "translate-x-0 opacity-100"
                        }
                    `}
                >
                    <Hero />
                </div>
                <div
                    className={`
                        overflow-auto transition-all duration-400 absolute
                        ${ scroll == "Right" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0" }
                    `}
                >
                    <AboutAnime />
                </div>
                <div 
                    className={`
                        w-full transition-all duration-400 absolute
                        ${ scroll == "Bottom" ? "translate-y-1/4 xs:translate-y-0 opacity-100" : "-translate-y-[100vh] opacity-0" }
                    `}
                >
                    <AboutApi />
                </div>
            </div>
        </div>
    )
}