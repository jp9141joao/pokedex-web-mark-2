import NavbarLoggedIn from "@/components/navbar/NavbarLoggedIn";
import Filter from "@/components/overview/Filter";
import Navigation from "@/components/overview/Navigation";
import PokemonList from "@/components/overview/PokemonsList";
import { useState } from "react";

export default function Overview() {

    const [passedPokemonCount, setPassedPokemonCount ] = useState<number>(0);
    const [ canNavigate, setCanNavigate ] = useState<{ 
        previous: boolean, next: boolean }
    >({ previous: false, next: true });


    return (
        <div
            className="px-[1.3em] sm:px-[1.8em]"
        >
            <NavbarLoggedIn />
            <Filter />
            <PokemonList passedPokemonCount={passedPokemonCount} setCanNavigate={setCanNavigate}/>
            <Navigation canNavigate={canNavigate} passedPokemonCount={passedPokemonCount} setPassedPokemonCount={setPassedPokemonCount}/>
        </div>
    );
}
