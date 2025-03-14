import { Hero } from "./Hero";
import { AboutAnime } from "./AboutAnime";
import { useScroll } from "./ScrollContext";

export const Content = () => {
    
    const { scrollLeft } = useScroll();
    
    return (
        <div className="grid flex-grow">
            <div 
                className="relative grid place-items-center gap-1"
            >
                <div 
                    className={`
                        transition-all duration-400 absolute
                        ${ scrollLeft ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100" }
                    `}
                >
                    <Hero />
                </div>
                <div
                    className={`
                        overflow-auto transition-all duration-400 absolute
                        ${ scrollLeft ? "translate-x-0 opacity-100" : "translate-x-full opacity-0" }
                    `}
                >
                    <AboutAnime />
                </div>
            </div>
        </div>
    )
}