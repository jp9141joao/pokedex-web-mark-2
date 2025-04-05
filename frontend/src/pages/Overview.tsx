import NavbarLoggedIn from "@/components/navbar/NavbarLoggedIn";
import Filter from "@/components/overview/Filter";
import Navigation from "@/components/overview/Navigation";
import PokemonList from "@/components/overview/PokemonsList";
import { useState } from "react";

export default function Overview() {

    const [passedPokemonCount, setPassedPokemonCount ] = useState<number>(0);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ canNavigate, setCanNavigate ] = useState<{ 
        previous: boolean, next: boolean }
    >({ previous: false, next: true });


    return (
        <div className=" px-[1.3em] sm:px-[1.8em]">
            <div className="">
                <NavbarLoggedIn />
                <Filter />
                <PokemonList passedPokemonCount={passedPokemonCount} isLoading={isLoading} setIsLoading={setIsLoading} setCanNavigate={setCanNavigate}/>
                <Navigation canNavigate={canNavigate} passedPokemonCount={passedPokemonCount} setIsLoading={setIsLoading} setPassedPokemonCount={setPassedPokemonCount}/>
            </div>
        </div>
    );
}
