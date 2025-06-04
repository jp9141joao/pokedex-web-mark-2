// Import the Ivysaur image from the assets folder
import Ivysaur from "@/assets/Ivysaur.png"

// Import useEffect hook to run side effects in the component
import { useEffect } from "react"

// Import preload function to preload resources for better performance
import { preload } from "react-dom";

export default function AboutApi() {

    // Preload the Ivysaur image when the component mounts to improve loading speed
    useEffect(() => {
        preload(Ivysaur, { as: 'image'});
    }, []);
    
    return (
        // Main container uses a grid layout with two columns on large screens,
        // centers content, and adjusts spacing and padding responsively
        <div className="grid place-items-center items-center gap-[3vh] xxs:gap-[4vh] lg:gap-0 lg:grid-cols-2 rounded-4xl lg:px-[8vw] 2xl:px-40">

            {/* Text section centered with responsive padding */}
            <div className="text-center">
                <div className="">
                    {/* Responsive title with predefined styles */}
                    <h1 className="title-responsive">
                        Discover the Ultimate Pokémon API
                    </h1>
                </div>

                {/* Paragraph with responsive horizontal padding and margin on top */}
                <div className="px-[6vw] xs:px-[14vw] sm:px-[12vw] lg:px-0 xl:px-[3vw] 2xl:px-22 mt-1 lg:mt-2 2xl:mt-2">
                    <p className="para-responsive">
                        The <span className="text-red-500">PokeAPI</span> is an open-source 
                        RESTful API that provides detailed data about the Pokémon universe. 
                        It offers information on species, abilities, moves, types, and regions, 
                        allowing developers to integrate Pokémon data into apps, games, or websites
                        using a simple JSON format.
                    </p>
                </div>
            </div>

            {/* Image section that displays the Ivysaur image with responsive padding */}
            <div>
                <img 
                    src={Ivysaur} 
                    alt="Ivysaur"
                    className="px-[20vw] xs:px-[22vw] sm:px-[28vw] md:px-[20vw] lg:px-[4vw] 2xl:px-16"
                />
            </div>
        </div>
    )
}
