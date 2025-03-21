import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Pokemons from "@/assets/pokemon-unite.jpg"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutApi() {

    useEffect(() => {
        preload(Pokemons, { as: 'image'});
    }, []);
    
    return (
        <div className="grid place-items-center items-center lg:grid-cols-2 rounded-4xl">
            <div className="text-center">
                <div className="2xl:px-8 max-w-auto">
                    <h1 className="title-responsive">
                        Discover the Ultimate Pokémon API
                    </h1>
                </div>
                <div className="2xl:px-26 2xl:mt-2">
                    <p className="para-responsive">
                        The <span className="text-red-500">PokeAPI</span> is an open-source, RESTful API that provides detailed 
                        data about the Pokémon universe. It offers a wide range of information 
                        such as Pokémon species, abilities, moves, types, and habitats. The API 
                        is organized into several endpoints, each containing specific categories
                        of data like Pokémon stats, moves, evolutions, abilities, battle types, 
                        and regions. This API allows developers to access and integrate Pokémon-
                        related data into apps, games, or websites in an easy-to-use JSON format.
                    </p>
                </div>
            </div>
            <div className="h-[55vh] xxs:h-[53vh] xs:h-[67vw] md:h-[82vw] lg:h-auto 2xl:h-[700px]">
                <img 
                    src={""} 
                    alt="Pokemons" 
                    className="w-full h-full object-cover object-[20%_80%] xs:object-[20%_65%] md:object-[20%_100%] lg:object-[20%_30%] 2xl:object-[40%_30%] rounded-t-4xl lg:rounded-4xl"
                />
            </div>
        </div>
    )
}

/*
<SheetContent side="bottom" className="max-h-[83vh] xs:max-h-[86vh] xs:px-[14vw] md:px-[20vw] lg:px-[30vw] rounded-t-4xl">
                <SheetHeader className="pb-0 xxs:pb-4">
                    <SheetTitle className="text-2xl xxs:text-3xl xs:text-2xl md:text-3xl lg:text-4xl 2xl:text-xl text-center text-white mt-7">
                        Discover the Ultimate Pokémon API
                    </SheetTitle>
                    <SheetDescription className="mt-2">
                        <span className="text-white">
                            The PokeAPI is an open-source, RESTful API that provides detailed 
                            data about the Pokémon universe. It offers a wide range of information 
                            such as Pokémon species, abilities, moves, types, and habitats. The API 
                            is organized into several endpoints, each containing specific categories
                            of data like Pokémon stats, moves, evolutions, abilities, battle types, 
                            and regions. This API allows developers to access and integrate Pokémon-
                            related data into apps, games, or websites in an easy-to-use JSON format.
                        </span>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <div className="h-[45vh] xxs:h-[45vh] lg:h-[55vh] 2xl:w-[50vw] overflow-hidden rounded-t-4xl">
                        <img 
                            src={Pokemons} 
                            alt="Noctali" 
                            className="w-full h-full object-cover object-[20%_50%]"
                        />
                    </div>
                </SheetFooter>
            </SheetContent>

*/