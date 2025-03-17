import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import AboutApiButton  from "./AboutApiAButton";
import PikachuImage from "@/assets/picachu.png";
import { useScroll } from "./ScrollContext";
import { useEffect } from "react";
import { preload } from "react-dom";

export default function Hero() {

    const { setScrollLeft } = useScroll();

    useEffect(() => {
        preload(PikachuImage, { as: 'image'});
    }, []);

    return (
        <div className="grid gap-1">
            <div>
                <img 
                    src={""} 
                    alt="Pikachu"
                    className="px-14 xxs:px-10 xs:px-36 lg:px-96 z-0"
                />
            </div>
            <div className="mt-3">
                <h1 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl lg:text-4xl text-center font-semibold px-8 xxs:px-0 sm:px-6 md:px-14">
                    Explore the Pokémon Universe!
                </h1>
            </div>
            <div>
                <p className="text-lg xxs:text-xl xs:text-2xl sm:text-3xl lg:text-2xl text-center text-gray-800 px-4 xxs:px-2 xs:px-14 sm:px-32 md:px-38 sm:mt-1">
                    Find Pokémon stats and abilities with <span className="text-red-400 font-semibold">
                                                            PokeAPI.
                                                          </span>
                </p>
            </div>
            <div className="flex justify-center gap-3 mt-2">
                <div>
                    <AboutApiButton />
                </div>
                <div>
                    <Button
                        variant={"outline"}
                        size={"lg"}
                        onClick={() => setScrollLeft(true)}
                        className="flex items-center text-sm xxs:text-base xs:text-sm sm:text-lg lg:text-base gap-0 transform transition-all duration-400 lg:hover:translate-x-3 font-semibold border-black"
                    >
                        <p>
                            About Anime
                        </p>
                        <IoIosArrowRoundForward className="size-6 xxs:size-7 xs:size-6 sm:size-7" />
                    </Button>
                </div>
            </div>
        </div>   
    )
}