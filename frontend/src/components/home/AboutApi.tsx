import Ivysaur from "@/assets/Ivysaur.png"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutApi() {

    useEffect(() => {
        preload(Ivysaur, { as: 'image'});
    }, []);
    
    return (
        <div className="grid place-items-center items-center gap-7 sm:gap-20 lg:grid-cols-2 rounded-4xl">
            <div className="text-center">
                <div className="xs:px-14 sm:px-26">
                    <h1 className="title-responsive">
                        Discover the Ultimate Pokémon API
                    </h1>
                </div>
                <div className="mt-2 sm:mt-4 px-[3vw] xs:px-10 sm:px-30 lg:px-4 2xl:px-26 2xl:mt-2">
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
                    className="px-16 xxs:px-12 xs:px-28 sm:px-50 lg:px-96 xl:px-[39em]"
                />
            </div>
        </div>
    )
}
