import { useEffect, useState } from "react"
import Pokeball from "@/assets/pokeball.svg";

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

interface pokemon {
    id: string;
    name: string;
    type: string[];
    height: string;
    weight: string;
    hitpoints: string;
    attack: string;
    defense: string;
    specialattack: string;
    specialdefense: string;
    speed: string;
    img: string;
}
  

export default function PokemonList() {

    const [ pokemons, setPokemons ] = useState<pokemon[]>([]);
    const [passedPokemonCount, setPassedPokemonCount ] = useState<number>(0);
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
                `https://pokeapi.co/api/v2/pokemon/?offset=${passedPokemonCount}&limit=1`
            );

            const data = await response.json();

            const pokemonPromises = data.results.map((item: any) => {
                return fetch(item.url).then(res => res.json());
            });
            const pokemonDetails = await Promise.all(pokemonPromises);

            const formattedPokemons = pokemonDetails.map((pokemon: any) => ({
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.types.map((i: any) => i.type.name ),
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

            setPassedPokemonCount(passedPokemonCount + 20);
            setPokemons(formattedPokemons);

        } catch (error: any) {
            console.error(error);
        }
    };


    useEffect(() => {
        loadPokemons();
    }, []);

    return (
        <div className="mt-4 grid gap-16">
            {
                pokemons.map((item: pokemon) => (  
                    <div className="relative grid place-items-end h-44" style={{border: '1px solid red'}}>
                        <div>
                            <img 
                                src={"item.img"} 
                                alt={item.name}
                                className="absolute top-0 right-0 -translate-y-12 translate-x-4 w-50 z-50"
                            />
                        </div>
                        <div 
                            key={item.id}
                            className={`relative h-36 w-full rounded-4xl px-6 py-4`} 
                            style={{backgroundColor: getTypeColor(item.type[0], "dark")}}
                        >
                            <div>
                                <h1 className="text-4xl text-white/50">
                                    <strong>
                                        #{getIdFormatted(item.id)}
                                    </strong>
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-xl text-white font-semibold">
                                    {item.name.toUpperCase()} 
                                </h1>
                            </div>
                            <div className="flex gap-2">
                            {
                                item.type.map((type: string) => (
                                    <div 
                                        className="grid place-items-center items-center w-11 h-11 rounded-4xl"
                                        style={{backgroundColor: getTypeColor(type, "light")}}
                                    >
                                        <img 
                                            src={
                                                type === "bug" ? BugIcon :
                                                    type === "dark" ? DarkIcon :
                                                    type === "dragon" ? DragonIcon :
                                                    type === "electric" ? ElectricIcon :
                                                    type === "fairy" ? FairyIcon :
                                                    type === "fighting" ? FightingIcon :
                                                    type === "fire" ? FireIcon :
                                                    type === "flying" ? FlyingIcon :
                                                    type === "ghost" ? GhostIcon :
                                                    type === "grass" ? GrassIcon :
                                                    type === "ground" ? GroundIcon :
                                                    type === "ice" ? IceIcon :
                                                    type === "normal" ? NormalIcon :
                                                    type === "poison" ? PoisonIcon :
                                                    type === "psychic" ? PsychicIcon :
                                                    type === "rock" ? RockIcon :
                                                    type === "steel" ? SteelIcon :
                                                    type === "water" ? WaterIcon : ""
                                                } 
                                            alt={type}
                                            className="text-white fill-current" 
                                        />
                                    </div>
                                ))
                            }
                            </div>
                           
                            <div className="h-36 overflow-hidden absolute right-0 top-0  opacity-8">
                                <img 
                                    src={Pokeball} 
                                    alt="Pokeball"
                                    className={`w-[46vw] -rotate-30`}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}