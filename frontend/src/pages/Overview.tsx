import NavbarLoggedIn from "@/components/navbar/NavbarLoggedIn";
import Filter from "@/components/overview/Filter";
import Navigation from "@/components/overview/Navigation";
import PokemonList from "@/components/overview/PokemonsList";
import { Navigate } from "@/components/utils/types";
import { useEffect, useState } from "react";



export default function Overview() {
    const [ filterValue, setFilterValue ] = useState<string>('');
    const [ filterBy, setFilterBy ] = useState<string | null>(null);
    const [ passedPokemonCount, setPassedPokemonCount ] = useState<number>();
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ canNavigate, setCanNavigate ] = useState<Navigate>({ previous: false, next: true });

    useEffect(() => {
        if (passedPokemonCount) {
            sessionStorage.setItem('passedPokemonCount', passedPokemonCount.toString());
        }

    }, [passedPokemonCount]);

    useEffect(() => {
        const value = sessionStorage.getItem('passedPokemonCount');

        if (value) {
            setPassedPokemonCount(Number(value));
        } else {
            setPassedPokemonCount(0);
        }

    }, []);

    return (
        <div className="w-full flex flex-col lg:items-center min-h-screen px-[1.3em] sm:px-[1.8em]" style={{border: '1px solid red'}}>
            <NavbarLoggedIn />
            <Filter
                filterValue={filterValue} 
                setFilterValue={setFilterValue} 
                filterBy={filterBy}
                setFilterBy={setFilterBy}
            />
            <PokemonList
                filterValue={filterValue} 
                filterBy={filterBy}
                passedPokemonCount={passedPokemonCount || 0} 
                isLoading={isLoading} 
                setIsLoading={setIsLoading} 
                setCanNavigate={setCanNavigate}
            />
            <Navigation canNavigate={canNavigate} passedPokemonCount={passedPokemonCount || 0} setIsLoading={setIsLoading} setPassedPokemonCount={setPassedPokemonCount}/>
        </div>
    );
}
