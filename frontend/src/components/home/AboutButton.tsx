import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"

export const AboutButton = () => (
    <Sheet>
        <SheetTrigger>
            <Button
                size={"lg"}
                className="text-lg rounded-4xl"
            >
                About API
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="min-h-[90vh]">
            <SheetHeader>
                <SheetTitle className="text-2xl text-center text-white">
                    Discover the Ultimate Pokémon API
                </SheetTitle>
                <SheetDescription className="grid gap-4">
                    <div>
                        <p className="text-center text-white">
                            The PokeAPI is an open-source, RESTful API that provides detailed 
                            data about the Pokémon universe. It offers a wide range of information 
                            such as Pokémon species, abilities, moves, types, and habitats. The API 
                            is organized into several endpoints, each containing specific categories
                            of data like Pokémon stats, moves, evolutions, abilities, battle types, 
                            and regions. This API allows developers to access and integrate Pokémon-
                            related data into apps, games, or websites in an easy-to-use JSON format.
                        </p>
                    </div>
                    <div>

                    </div>
                </SheetDescription>
                <div>
    
                </div>
            </SheetHeader>
        </SheetContent>
    </Sheet>
)