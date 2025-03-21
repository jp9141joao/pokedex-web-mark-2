import Hero from "./Hero";
import AboutAnime from "./AboutAnime";
import { useScroll } from "./ScrollContext";

export default function Content() {
    
    const { scroll } = useScroll();
    
    return (
        <div className="max-w-[1536px] grid flex-grow">
            <div 
                className="relative grid place-items-center gap-1"
            >
                <div 
                    className={`
                        transition-all duration-400 absolute
                        ${ 
                            scroll == "Right" ? "-translate-x-full opacity-0" : 
                            scroll == "Bottom" ? "-translate-y-full opacity-0" :
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
                        transition-all duration-400 absolute
                        ${ scroll == "Bottom" ? "translate-y-full opacity-100" : "translate-y-0 opacity-00" }
                    `}
                >
                    <div>
                        test
                    </div>
                </div>
            </div>
        </div>
    )
}