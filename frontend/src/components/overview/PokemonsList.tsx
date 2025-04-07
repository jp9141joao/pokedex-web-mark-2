import { useEffect, useState } from "react"

import Pokeball from "@/assets/pokeball.svg";

import Pattern from "@/assets/10x5.svg";

import BugIcon from "@/assets/types/bug.svg";
import DarkIcon from "@/assets/types/dark.svg";
import DragonIcon from "@/assets/types/dragon.svg";
import ElectricIcon from "@/assets/types/electric.svg";
import FairyIcon from "@/assets/types/fairy.svg";
import FightingIcon from "@/assets/types/fighting.svg";
import FireIcon from "@/assets/types/fire.svg";
import FlyingIcon from "@/assets/types/flying.svg";
import GhostIcon from "@/assets/types/ghost.svg";
import GrassIcon from "@/assets/types/grass.svg";
import GroundIcon from "@/assets/types/ground.svg";
import IceIcon from "@/assets/types/ice.svg";
import NormalIcon from "@/assets/types/normal.svg";
import PoisonIcon from "@/assets/types/poison.svg";
import PsychicIcon from "@/assets/types/psychic.svg";
import RockIcon from "@/assets/types/rock.svg";
import SteelIcon from "@/assets/types/steel.svg";
import WaterIcon from "@/assets/types/water.svg";
import { Spinner } from "../ui/spinner";
import { Navigate, Pokemon } from "../utils/types";

export default function PokemonList(
    { 
        filterValue,
        filterBy,
        passedPokemonCount, 
        isLoading, 
        setIsLoading, 
        setCanNavigate 
    }: {
        filterValue: string,
        filterBy: string | null, 
        passedPokemonCount: number, 
        isLoading: boolean, 
        setIsLoading: (value: boolean) => void, 
        setCanNavigate: (value: Navigate) => void }
) {
    const [ pokemons, setPokemons ] = useState<Pokemon[]>([]);
    const typeColors: { [key: string]: string } = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };
    const typeIconColors: { [key: string]: string } = {
        normal: '#C8D6A3',    
        fire: '#FF9F55',   
        water: '#7AC7FF',    
        electric: '#FFDA56',  
        grass: '#8FDB6C',    
        ice: '#BDE4EA',       
        fighting: '#FF7A45', 
        poison: '#B57BB1',   
        ground: '#F4CA83',    
        flying: '#B9A6FF',  
        psychic: '#FF66A0',   
        bug: '#B9D29E',      
        rock: '#CBBF6E',      
        ghost: '#8E7AB7',    
        dragon: '#8663FD',   
        dark: '#8E715F',     
        steel: '#C1C1D1',    
        fairy: '#E3A0B9',  
    };

    const getTypeColor = (type: string, tone: string): string => {
        if (tone == "dark") return typeColors[type.toLowerCase()] || '#777'
        else return typeIconColors[type.toLowerCase()] || '#888888'
    };

    const getIdFormatted = (id: string): string => {
        
        if (id.length >= 5) return id;

        Array.from({ length: 5 }, () => {
            if (id.length >= 5) return id;

            id = '0' + id;
        });

        return id;
    } 

    const loadPokemons = async () => {
        try {

            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/?offset=${passedPokemonCount}&limit=24`
            );

            const data = await response.json();

            setCanNavigate({
                previous: data.previous != null ? true : false,
                next: data.next != null ? true : false,
            });

            const pokemonPromises = data.results.map((item: any) => {
                return fetch(item.url).then(res => res.json());
            });
            const pokemonDetails = await Promise.all(pokemonPromises);

            const formattedPokemons = pokemonDetails.map((pokemon: any) => ({
                id: getIdFormatted(pokemon.id),
                name: pokemon.name,
                type_1: pokemon.types[0].type.name,
                type_2: pokemon.types[1] ? pokemon.types[1].type.name : null,
                height: pokemon.height,
                weight: pokemon.weight,
                hitpoints: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                specialattack: pokemon.stats[3].base_stat,
                specialdefense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat,
                img: pokemon.sprites.other.home.front_default
            }));

            setPokemons(formattedPokemons);
        } catch (error: any) {
            console.error(error);
        }
    };

    useEffect(() => {
        setIsLoading(false);
    }, [pokemons]);

    useEffect(() => {
        loadPokemons();
    }, [passedPokemonCount]);

    return (
        <div className="max-w-[1536px] flex-grow mt-1">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-3">
                {
                    pokemons.map((item: Pokemon) => {

                        const key = filterBy?.toLowerCase() as keyof Pokemon;
                        
                        return (
                            filterBy === null ||
                            (
                                filterBy !== null &&
                                (
                                    filterBy == "Type" ? 
                                    item['type_1']?.toLowerCase().includes(filterValue.toLowerCase()) ||
                                    item['type_2']?.toLowerCase().includes(filterValue.toLowerCase()) :
                                    item[key]?.toString().toLowerCase().includes(filterValue.toLowerCase())
                                )
                            ) ?
                            (
                                <div 
                                    key={item.id}
                                    className={`hover:scale-102 grid relative h-40 xs:h-44 sm:h-[170px] lg:h-46 w-full lg:w-119 xl:w-100 2xl:w-126 rounded-4xl px-6 py-4 overflow-hidden z-20 mt-3`} 
                                    style={{backgroundColor: getTypeColor(item.type_1, "dark")}}
                                >
                                    <div className="absolute grid place-items-center -translate-y-6 top-0 xs:top-1/6 z-1">
                                        <img 
                                            src={Pattern} 
                                            alt="Pattern"
                                            className="w-50 xs:w-60 sm:w-44 lg:w-54 z-10 opacity-14"
                                        />
                                    </div>
                                    {
                                        isLoading ?
                                        <Spinner size={"large"} /> :
                                        <>
                                            <div>
                                                <img 
                                                    src={item.img} 
                                                    alt={item.name}
                                                    className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-3 xs:-translate-x-4 w-36 xs:w-42 sm:w-30 md:w-42 lg:w-44 z-30"
                                                />
                                            </div>
                                            <div className="relative z-20 ">
                                                <h1 className="text-4xl text-white">
                                                    <strong>
                                                        #{getIdFormatted(item.id)}
                                                    </strong>
                                                </h1>
                                            </div>
                                            <div className="relative z-20">
                                                <h1 className="text-xl text-white font-semibold">
                                                    {item.name.toUpperCase()}
                                                </h1>
                                            </div>
                                            <div className="flex gap-2 mt-2 z-30">
                                                <div 
                                                    className="grid place-items-center items-center w-11 h-11 xs:w-12 xs:h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-4xl"
                                                    style={{backgroundColor: getTypeColor(item.type_1, "light")}}
                                                >
                                                    <img 
                                                        src={
                                                            item.type_1 === "bug" ? BugIcon :
                                                                item.type_1 === "dark" ? DarkIcon :
                                                                item.type_1 === "dragon" ? DragonIcon :
                                                                item.type_1 === "electric" ? ElectricIcon :
                                                                item.type_1 === "fairy" ? FairyIcon :
                                                                item.type_1 === "fighting" ? FightingIcon :
                                                                item.type_1 === "fire" ? FireIcon :
                                                                item.type_1 === "flying" ? FlyingIcon :
                                                                item.type_1 === "ghost" ? GhostIcon :
                                                                item.type_1 === "grass" ? GrassIcon :
                                                                item.type_1 === "ground" ? GroundIcon :
                                                                item.type_1 === "ice" ? IceIcon :
                                                                item.type_1 === "normal" ? NormalIcon :
                                                                item.type_1 === "poison" ? PoisonIcon :
                                                                item.type_1 === "psychic" ? PsychicIcon :
                                                                item.type_1 === "rock" ? RockIcon :
                                                                item.type_1 === "steel" ? SteelIcon :
                                                                item.type_1 === "water" ? WaterIcon : ""
                                                            } 
                                                        alt={item.type_1}
                                                        className="xs:w-7 lg:w-8 h-auto text-white fill-current" 
                                                    />
                                                </div>
                                                {
                                                    item.type_2 ?
                                                    <div 
                                                        className="grid place-items-center items-center w-11 h-11 xs:w-12 xs:h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-4xl"
                                                        style={{backgroundColor: getTypeColor(item.type_2, "light")}}
                                                    >
                                                        <img 
                                                            src={
                                                                item.type_2 === "bug" ? BugIcon :
                                                                    item.type_2 === "dark" ? DarkIcon :
                                                                    item.type_2 === "dragon" ? DragonIcon :
                                                                    item.type_2 === "electric" ? ElectricIcon :
                                                                    item.type_2 === "fairy" ? FairyIcon :
                                                                    item.type_2 === "fighting" ? FightingIcon :
                                                                    item.type_2 === "fire" ? FireIcon :
                                                                    item.type_2 === "flying" ? FlyingIcon :
                                                                    item.type_2 === "ghost" ? GhostIcon :
                                                                    item.type_2 === "grass" ? GrassIcon :
                                                                    item.type_2 === "ground" ? GroundIcon :
                                                                    item.type_2 === "ice" ? IceIcon :
                                                                    item.type_2 === "normal" ? NormalIcon :
                                                                    item.type_2 === "poison" ? PoisonIcon :
                                                                    item.type_2 === "psychic" ? PsychicIcon :
                                                                    item.type_2 === "rock" ? RockIcon :
                                                                    item.type_2 === "steel" ? SteelIcon :
                                                                    item.type_2 === "water" ? WaterIcon : ""
                                                                } 
                                                            alt={item.type_2}
                                                            className="xs:w-7 lg:w-8 h-auto text-white fill-current" 
                                                        />
                                                    </div> : null
                                                }
                                            </div>      
                                            <div className="h-40 xs:h-46 lg:h-46 overflow-hidden absolute right-0 top-0 -translate-y-6 xs:top-0 md:top-1/12 lg:top-0  opacity-8">
                                                <img 
                                                    src={Pokeball} 
                                                    alt="Pokeball"
                                                    className={`w-44 xs:w-56 sm:w-40 md:w-50 lg:w-52 -rotate-30`}
                                                />
                                            </div>
                                        </> 
                                    }
                                </div>
                            ) :
                            null
                        )
                    })
                }
            </div>
        </div>
    )
}

