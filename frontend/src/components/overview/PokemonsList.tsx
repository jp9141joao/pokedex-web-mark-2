import { useEffect, useState } from "react"
import Pokeball from "@/assets/pokeball.svg";

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

    const getTypeColor = (type: string): string => {
        return typeColors[type.toLowerCase()] || '#777';
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
                `https://pokeapi.co/api/v2/pokemon/?offset=${passedPokemonCount}&limit=20`
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
        <div className="mt-14 grid gap-16">
            {
                pokemons.map((item: pokemon) => (
                    <div 
                        key={item.id}
                        className={`relative h-36 w-full rounded-4xl px-6 py-4`} 
                        style={{backgroundColor: getTypeColor(item.type[0])}}
                    >
                        <div>
                            <h1 className="text-4xl font-semibold  opacity-12">
                                #{getIdFormatted(item.id)}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                {item.name} 
                            </h1>
                        </div>
                        <div className="absolute right-0 top-0 -translate-y-20 z-50">
                            <img 
                                src={item.img} 
                                alt={item.name}
                                className="pl-34 z-50"
                            />
                        </div>
                        <div>
                        <div className="h-36 overflow-hidden absolute right-0 top-0  opacity-8">
                            <img 
                                src={Pokeball} 
                                alt="Pokeball"
                                className="w-[46vw] -rotate-30"
                            />
                        </div>
                        </div>
                        <div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}