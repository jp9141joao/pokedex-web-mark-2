import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AboutButton } from "./AboutButton";
import PikachuImage from "@/assets/picachu.png";

export const Hero = () => {

    return (
        <div className="grid flex-grow">
            <div className="grid place-items-center gap-1">
                <div className="grid gap-1">
                    <div>
                        <img 
                            src={ PikachuImage } 
                            alt="Pikachu" 
                            className="px-14 xxs:px-10"
                        />
                    </div>
                    <div className="mt-3">
                        <h1 className="text-3xl xxs:text-4xl text-center font-semibold px-8 xxs:px-3">
                            Explore the Pokémon Universe!
                        </h1>
                    </div>
                    <div>
                        <p className="text-xl xxs:text-2xl text-center text-gray-800 px-4 xxs:px-2">
                            Find Pokémon stats and abilities with <span className="text-red-400 font-semibold">
                                                                    PokeAPI.
                                                                  </span>
                        </p>
                    </div>
                    <div className="flex justify-center gap-3 mt-2">
                        <AboutButton />
                        <Button
                            variant={"outline"}
                            size={"lg"}
                            className="flex items-center text-lg gap-0 transform transition-all duration-400 hover:translate-x-3 font-semibold border-black rounded-4xl"
                        >
                            <p>
                                About Anime
                            </p>
                            <IoIosArrowRoundForward className="size-7" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}