import Ivysaur from "@/assets/Ivysaur.png"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutApi() {

    useEffect(() => {
        preload(Ivysaur, { as: 'image'});
    }, []);
    
    return (
        <div className="grid place-items-center items-center gap-[6vw] xxs:gap-3 sm:gap-8 lg:grid-cols-2 rounded-4xl lg:px-20 2xl:px-40">
            <div className="text-center">
                <div className="">
                    <h1 className="title-responsive">
                        Discover the Ultimate Pokémon API
                    </h1>
                </div>
                <div className="px-[6vw] mt-1 lg:mt-2 2xl:mt-2  xs:px-10 sm:px-20 lg:px-0 xl:px-8">
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
                    className="px-[20vw] xs:px-28 sm:px-44 lg:px-0 2xl:px-10"
                />
            </div>
        </div>
    )
}
