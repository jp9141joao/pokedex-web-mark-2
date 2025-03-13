import { Hero } from "./Hero";
import { AboutAnime } from "./AboutAnime";
import { useScroll } from "./ScrollContext";

export const Content = () => {
    
    const { scrollLeft, setScrollLeft } = useScroll();
    
    return (
        <div className="grid flex-grow">
            <div 
                className="grid place-items-center gap-1"
            >
                <div 
                    className={`
                        transition-all duration-400
                        ${ scrollLeft ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100" }
                    `}
                >
                    <Hero />
                </div>
                <div
                    className={`
                        transition-all duration-400
                        ${ scrollLeft ? "translate-x-0 opacity-100" : "translate-x-full opacity-0" }
                    `}
                >
                    <AboutAnime />
                </div>
            </div>
        </div>
    )
}