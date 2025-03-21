import {
    Sheet,
    SheetContent,
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
                    className="text-button-responsive hover:scale-105"
                    style={{ color: "white" }}
                >
                    About API
                </Button>
            </SheetTrigger> 
            <SheetContent side="bottom" className="max-w-[1536px] place-items-center items-center max-h-[83vh] xs:max-h-[86vh] xs:mx-[13vw] lg:mx-0 lg:p-8 xl:p-10 px-4 pt-6 rounded-t-4xl lg:rounded-4xl">
                <div className="grid lg:grid-cols-2 gap-2 xxs:gap-4 md:gap-6 lg:gap-16">
                    <div className="text-center">
                        <div className="px-3 lg:px-0 2xl:px-2">
                            <h1 className="text-2xl xxs:text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold text-white">
                                Discover the Ultimate Pokémon API
                            </h1>
                        </div>
                        <div className="px-2 xs:px-6 lg:px-0 xl:px-8 2xl:px-16 mt-2 md:mt-3 lg:mt-3 2xl:mt-4 ">
                            <p className="text-xs xxs:text-sm xs:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-3xl text-gray-200">
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
                            src={Pokemons} 
                            alt="Pokemons" 
                            className="w-full h-full object-cover object-[20%_80%] xs:object-[20%_65%] md:object-[20%_100%] lg:object-[20%_30%] 2xl:object-[40%_30%] rounded-t-4xl lg:rounded-4xl"
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
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