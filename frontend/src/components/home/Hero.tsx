import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Pikachu from "@/assets/picachu.png";
import { useScroll } from "./ScrollContext";
import { useEffect } from "react";
import { preload } from "react-dom";

export default function Hero() {

    const { setScroll } = useScroll();

    useEffect(() => {
        preload(Pikachu, { as: 'image'});
    }, []);

    return (
        <div className="grid gap-1 lg:w-[100vw] max-w-[1536px]">
            <div>
                <img 
                    src={Pikachu} 
                    alt="Pikachu"
                    className="px-[20vw] xs:px-[32vw] lg:px-[38vw] 2xl:px-156"
                />
            </div>
            <div className="mt-3 lg:mt-0">
                <h1 className="title-responsive text-center font-semibold">
                    Explore the Pokémon Universe!
                </h1>
            </div>
            <div className="px-[16vw] xxs:px-[14vw] xs:px-[24vw] sm:px-[26vw] md:px-0 sm:mt-1 lg:mt-1 ">
                <p className="para-responsive text-center text-gray-800">
                    Find Pokémon stats and abilities with <span className="text-red-400 font-semibold">
                                                            PokeAPI.
                                                          </span>
                </p>
            </div>
            <div className="flex justify-center gap-3 xl:gap-4 mt-2 sm:mt-3 lg:mt-2">
                <div>
                    <Button
                        size={"responsive"}
                        onClick={() => setScroll("Bottom")}
                        className="text-button-responsive rounded-4xl"
                        style={{color: 'white'}}
                    >
                        About API
                    </Button>
                </div>
                <div>
                    <Button
                        variant={"outline"}
                        size={"responsive"}
                        onClick={() => setScroll("Right")}
                        className="text-button-responsive lg:hover:translate-x-3 border-black"
                        style={{ color: "black" }}
                    >
                        <div className="flex items-center">
                            <p>
                                About Anime
                            </p>
                            <IoIosArrowRoundForward className="size-6 xxs:size-7 xs:size-6 lg:size-7 2xl:size-8" />
                        </div>
                    </Button>
                </div>
            </div>
        </div>   
    )
}