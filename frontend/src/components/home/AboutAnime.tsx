// Import the Charizard image from the assets folder
import Charizard from "@/assets/charizard.png"

// Import useEffect hook to perform side effects in the component
import { useEffect } from "react"

// Import preload function to preload resources for better performance
import { preload } from "react-dom";

export default function AboutAnime() {

    // When the component mounts, preload the Charizard image to speed up image loading later
    useEffect(() => {
        preload(Charizard, { as: 'image' });
    }, []);

    return (
        // Main container uses a grid layout with two columns on large screens
        // and centers content. Adds spacing and padding responsive to screen size.
        <div className="grid place-items-center lg:grid-cols-2 flex-grow gap-[4vh] lg:gap-0 mt-4 lg:px-[4vw] xl:px-[6vw] 2xl:px-26">

            {/* Image displayed only on large screens (hidden on smaller devices) */}
            <div className="hidden lg:block">
                <img
                    src={Charizard} 
                    alt="Charizard" 
                    className="px-[2vw] 2xl:px-18"
                />
            </div>

            {/* Text section containing the title and description */}
            <div className="">
                <div>
                    {/* Responsive title with centered text and padding adapting to screen sizes */}
                    <h1 className="px-[10vw] lg:px-[6vw] xl:px-[3vw] 2xl:px-22 title-responsive text-center font-semibold">
                        The Amazing World of Pokémon
                    </h1>
                </div>

                {/* Paragraph container with responsive padding and centered text */}
                <div className="grid px-[6vw] xxs:px-[8vw] xs:px-[12vw] sm:px-[14vw] lg:px-[4vw] xl:px-[3.5vw] 2xl:px-24 text-base text-center mt-1 lg:mt-2 2xl:mt-2">
                    <p className="para-responsive">
                        Pokemon is a world of adventures where creatures and humans connect. 
                        Launched in 1996, its concept of capturing and battling monsters turned 
                        it into a global hit, expanding from games to movies. With over 800 
                        creatures, it continues to inspire with thrilling battles and heartfelt stories.
                    </p>
                </div>
            </div>

            {/* Image displayed only on smaller screens (hidden on large devices) */}
            <div className="lg:hidden w-full">
                <img
                    src={Charizard} 
                    alt="Charizard" 
                    className="px-[16vw] xxs:px-[12vw] xs:px-[16vw] sm:px-[24vw] md:px-[16vw] lg:px-0"
                />
            </div>
        </div>
    )
}
