import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Pokemons from "@/assets/pokemon-unite.jpg"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutApiButton() {

    useEffect(() => {
        preload(Pokemons, { as: 'image'});
    }, []);
    
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    size={"responsive"}
                    className="w-full text-sm xxs:text-base xs:text-sm sm:text-base lg:text-lg lg:hover:scale-105"
                >
                    About API
                </Button>
            </SheetTrigger> 
            <SheetContent side="bottom" className=" items-center max-h-[83vh] xs:max-h-[86vh] xs:px-[14vw] sm:px-[20vw] lg:p-12 xl:mx-[20vw] rounded-t-4xl">
                <div className="grid grid-cols-2 gap-16">
                    <div className="text-center">
                        <div className="mt-8">
                            <h1 className="text-2xl xxs:text-3xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-[3.2vw] font-semibold text-white">
                                Discover the Ultimate Pokémon API
                            </h1>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm lg:text-base xl:text-[1.2vw] text-gray-200">
                                The PokeAPI is an open-source, RESTful API that provides detailed 
                                data about the Pokémon universe. It offers a wide range of information 
                                such as Pokémon species, abilities, moves, types, and habitats. The API 
                                is organized into several endpoints, each containing specific categories
                                of data like Pokémon stats, moves, evolutions, abilities, battle types, 
                                and regions. This API allows developers to access and integrate Pokémon-
                                related data into apps, games, or websites in an easy-to-use JSON format.
                            </p>
                        </div>
                    </div>
                    <div className="h-[45vh] xxs:h-[45vh] lg:h-[84vh] xl:w-full">
                        <img 
                            src={""} 
                            alt="Noctali" 
                            className="w-full h-full object-cover object-[20%_50%] rounded-4xl"
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

/*
<SheetContent side="bottom" className="max-h-[83vh] xs:max-h-[86vh] xs:px-[14vw] sm:px-[20vw] lg:px-[30vw] rounded-t-4xl">
                <SheetHeader className="pb-0 xxs:pb-4">
                    <SheetTitle className="text-2xl xxs:text-3xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-xl text-center text-white mt-7">
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
                    <div className="h-[45vh] xxs:h-[45vh] lg:h-[55vh] xl:w-[50vw] overflow-hidden rounded-t-4xl">
                        <img 
                            src={Pokemons} 
                            alt="Noctali" 
                            className="w-full h-full object-cover object-[20%_50%]"
                        />
                    </div>
                </SheetFooter>
            </SheetContent>

*/