import Charizard from "@/assets/charizard.png"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutAnime() {
7
    useEffect(() => {
        preload(Charizard, { as: 'image' });
    }, []);

    return (
        <div className="grid place-items-center lg:grid-cols-2 flex-grow gap-[4vh] lg:gap-0 mt-4 lg:px-[4vw] xl:px-[6vw] 2xl:px-26">
            <div className="hidden lg:block">
                <img
                    src={Charizard} 
                    alt="Charizard" 
                    className="px-[2vw] 2xl:px-18"
                />
            </div>
            <div className="">
                <div>
                    <h1 className="px-[10vw] lg:px-[6vw] xl:px-[3vw] 2xl:px-22 title-responsive text-center font-semibold">
                        The Amazing World of Pokémon
                    </h1>
                </div>
                <div className="grid px-[6vw] xxs:px-[8vw] xs:px-[12vw] sm:px-[14vw] lg:px-[4vw] xl:px-[3.5vw] 2xl:px-24 text-base text-center mt-1 lg:mt-2 2xl:mt-2">
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
                    className="px-[16vw] xxs:px-[12vw] xs:px-[16vw] sm:px-[24vw] md:px-[16vw] lg:px-0"
                />
            </div>
        </div>
    )
}