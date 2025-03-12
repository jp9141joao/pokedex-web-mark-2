import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AboutButton } from "./AboutButton";

export const Hero = () => (
    <div className="grid gap-2">
        <div>
            <p className="text-4xl text-center font-semibold">
                Explore the Pokémon Universe!
            </p>
        </div>
        <div>
            <p className="text-2xl text-center">
                Find Pokémon stats and abilities with PokeAPI.
            </p>
        </div>
        <div className="flex justify-center gap-3">
            <AboutButton />
            <Button
                variant={"outline"}
                size={"lg"}
                className="flex items-center transform transition-all duration-400 hover:translate-x-3 text-lg font-semibold border-black rounded-4xl"
            >
                <p>
                    About Anime
                </p>
                <IoIosArrowRoundForward className="size-6"/>
            </Button>
        </div>
    </div>
)