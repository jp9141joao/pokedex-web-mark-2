import Ivysaur from "@/assets/Ivysaur.png"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutApi() {

    useEffect(() => {
        preload(Ivysaur, { as: 'image'});
    }, []);
    
    return (
        <div className="grid place-items-center items-center gap-[3vh] xxs:gap-[4vh] lg:gap-0 lg:grid-cols-2 rounded-4xl lg:px-[8vw] 2xl:px-[10.5vw]">
            <div className="text-center">
                <div className="">
                    <h1 className="title-responsive">
                        Discover the Ultimate Pokémon API
                    </h1>
                </div>
                <div className="px-[6vw] xs:px-[14vw] sm:px-[12vw] lg:px-0 xl:px-[3vw] mt-1 lg:mt-2 2xl:mt-2">
                    <p className="para-responsive">
                        The <span className="text-red-500">PokeAPI</span> is an open-source 
                        RESTful API that provides detailed data about the Pokémon universe. 
                        It offers information on species, abilities, moves, types, and regions, 
                        allowing developers to integrate Pokémon data into apps, games, or websites
                        using a simple JSON format.
                    </p>
                </div>
            </div>
            <div>
                <img 
                    src={Ivysaur} 
                    alt="Ivysaur" 
                    className="px-[20vw] xs:px-[22vw] sm:px-[26vw] md:px-[20vw] lg:px-[4vw]"
                />
            </div>
        </div>
    )
}
