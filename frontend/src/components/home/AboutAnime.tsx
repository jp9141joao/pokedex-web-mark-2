import Charizard from "@/assets/charizard.png"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutAnime() {
7
    useEffect(() => {
        preload(Charizard, { as: 'image' });
    }, []);

    return (
        <div className="grid place-items-center lg:grid-cols-2 flex-grow gap-3 xxs:gap-3 xs:gap-5 mt-4">
            <div className="hidden lg:block">
                <img
                    src={Charizard} 
                    alt="Charizard" 
                    className="px-10 2xl:px-24"
                />
            </div>
            <div>
                <div>
                    <h1 className="px-6 xxs:px-6 lg:px-16 title-responsive text-center font-semibold">
                        The Amazing World of Pokémon
                    </h1>
                </div>
                <div className="grid px-6 xxs:px-4 xs:px-18 sm:px-22 lg:px-12 xl:px-20 2xl:px-22 text-base text-center mt-1 sm:mt-4 lg:mt-2 2xl:mt-2">
                    <p className="para-responsive">
                        Pokemon is a world of adventures where creatures and humans connect. 
                        Launched in 1996, its concept of capturing and battling monsters turned 
                        it into a global hit, expanding from games to movies. With over 800 
                        creatures, it continues to inspire with thrilling battles and heartfelt stories.
                    </p>
                </div>
            </div>
            <div className="lg:hidden w-full">
                <img
                    src={Charizard} 
                    alt="Charizard" 
                    className="px-12 xxs:px-10 xs:px-24 lg:px-0"
                />
            </div>
        </div>
    )
}