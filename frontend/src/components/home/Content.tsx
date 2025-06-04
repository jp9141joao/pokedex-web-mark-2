// Import components Hero, AboutAnime, AboutApi and the useScroll hook from ScrollContext
import Hero from "./Hero";
import AboutAnime from "./AboutAnime";
import { useScroll } from "./ScrollContext";
import AboutApi from "./AboutApi";

export default function Content() {
    
    // Get the current scroll state from the ScrollContext
    const { scroll } = useScroll();
    
    return (
        // Main container with full width and max width, uses grid layout and grows to fill available space
        <div className="w-full max-w-[1536px] grid flex-grow">
            
            {/* Inner container, uses relative positioning and grid to center items with a gap */}
            <div 
                className="w-full relative grid place-items-center gap-1"
            >
                {/* Hero component container */}
                <div 
                    className={`
                        w-full transition-all duration-400 absolute
                        ${
                            // Show or hide the Hero component based on scroll state using translate and opacity
                            scroll == "Right" ? "-translate-x-full opacity-0" : 
                            scroll == "Bottom" ? "-translate-y-[100vw] opacity-0" :
                            "translate-x-0 opacity-100"
                        }
                    `}
                >
                    <Hero />
                </div>

                {/* AboutAnime component container */}
                <div
                    className={`
                        w-full transition-all duration-400 absolute
                        ${
                            // Show AboutAnime only when scroll is "Right", otherwise hide it offscreen to the right
                            scroll == "Right" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                        }
                    `}
                >
                    <AboutAnime />
                </div>

                {/* AboutApi component container */}
                <div 
                    className={`
                        w-full transition-all duration-400 absolute
                        ${
                            // Show AboutApi only when scroll is "Bottom", otherwise hide it by translating upwards
                            scroll == "Bottom" ? "translate-y-0 xs:translate-y-0 opacity-100" : "-translate-y-[100vh] opacity-0"
                        }
                    `}
                >
                    <AboutApi />
                </div>
            </div>
        </div>
    )
}
