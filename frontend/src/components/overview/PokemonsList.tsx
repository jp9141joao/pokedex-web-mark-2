// Importing necessary hooks from React and assets for type icons
import { useEffect, useState } from "react";
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

// Defining the component PokemonList with its props
export default function PokemonList({
    filterValue,
    filterBy,
    passedPokemonCount,
    isLoading,
    setIsLoading,
    setCanNavigate
}: {
    filterValue: string;
    filterBy: string | null;
    passedPokemonCount: number;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    setCanNavigate: (value: Navigate) => void;
}) {
    // State to hold the fetched Pokémon data
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // Color palettes for Pokémon types
    const typeColors: { [key: string]: string } = {
        bug: "#A8B820",
        dark: "#705848",
        dragon: "#7038F8",
        electric: "#F8D030",
        fairy: "#EE99AC",
        fighting: "#C03028",
        fire: "#F08030",
        flying: "#A890F0",
        ghost: "#705898",
        grass: "#78C850",
        ground: "#E0C068",
        ice: "#98D8D8",
        normal: "#A8A878",
        poison: "#A040A0",
        psychic: "#F85888",
        rock: "#B8A038",
        steel: "#B8B8D0",
        water: "#6890F0"
    };

    const typeIconColors: { [key: string]: string } = {
        bug: "#C6D16E",
        dark: "#A29288",
        dragon: "#7038F8",
        electric: "#F8D030",
        fairy: "#F4BDC9",
        fighting: "#D67873",
        fire: "#F5AC78",
        flying: "#C6B7F5",
        ghost: "#A292BC",
        grass: "#A7DB8D",
        ground: "#EBD69D",
        ice: "#BCE6E6",
        normal: "#C6C6A7",
        poison: "#C183C1",
        psychic: "#FA92B2",
        rock: "#D1C17D",
        steel: "#D1D1E0",
        water: "#9DB7F5"
    };

    // Function to get the color for a Pokémon type based on tone
    const getTypeColor = (type: string, tone: string): string => {
        return tone === "dark" ? typeColors[type.toLowerCase()] || "#777" : typeIconColors[type.toLowerCase()] || "#888888";
    };

    // Function to format Pokémon ID to have 5 digits (e.g., 00025)
    const getIdFormatted = (id: string): string => {
        while (id.length < 5) {
            id = "0" + id;
        }
        return id;
    };

    // Function to fetch Pokémon data
    const loadPokemons = async () => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/?offset=${passedPokemonCount}&limit=24`
            );
            const data = await response.json();

            // Set if navigation (prev/next) is available
            setCanNavigate({
                previous: data.previous != null,
                next: data.next != null
            });

            // Fetch detailed data for each Pokémon
            const pokemonPromises = data.results.map((item: any) => fetch(item.url).then(res => res.json()));
            const pokemonDetails = await Promise.all(pokemonPromises);

            // Format the Pokémon data
            const formattedPokemons = pokemonDetails.map((pokemon: any) => ({
                id: pokemon.id.toString(),
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

    // When Pokémon list changes, stop loading
    useEffect(() => {
        setIsLoading(false);
    }, [pokemons]);

    // Load Pokémon when the page number (offset) changes
    useEffect(() => {
        loadPokemons();
    }, [passedPokemonCount]);

    // Rendering Pokémon cards
    return (
        <div className="max-w-[1036px] flex-grow mt-1">
            <div className="grid sm:grid-cols-2 xl:grid-cols-2 sm:gap-x-3">
                {pokemons.map((item: Pokemon) => {
                    const key = filterBy?.toLowerCase() as keyof Pokemon;

                    // Filter logic
                    const shouldRender = filterBy === null || (
                        filterBy === "Type"
                            ? item.type_1?.toLowerCase().includes(filterValue.toLowerCase()) ||
                              item.type_2?.toLowerCase().includes(filterValue.toLowerCase())
                            : item[key]?.toString().toLowerCase().includes(filterValue.toLowerCase())
                    );

                    return shouldRender ? (
                        <div
                            key={item.id}
                            className="max-w-[512px] hover:scale-102 grid relative h-40 xs:h-44 sm:h-[170px] lg:h-46 w-full lg:w-[46.5vw] rounded-4xl px-6 py-4 overflow-hidden z-20 mt-3"
                            style={{ backgroundColor: getTypeColor(item.type_1, "dark") }}
                        >
                            {/* Background pattern (e.g., Pokéball) */}
                            <div className="absolute grid place-items-center -translate-y-6 top-0 xs:top-1/6 z-1">
                                <img
                                    src="Pattern"
                                    alt="Pattern"
                                    className="w-50 xs:w-60 sm:w-44 lg:w-54 z-10 opacity-14"
                                />
                            </div>

                            {/* Loading Spinner */}
                            {isLoading ? (
                                <Spinner size="large" />
                            ) : (
                                <>
                                    {/* Pokémon image */}
                                    <div>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-3 xs:-translate-x-4 w-36 xs:w-42 sm:w-30 md:w-42 lg:w-44 z-30"
                                        />
                                    </div>

                                    {/* Pokémon ID */}
                                    <div className="relative z-20">
                                        <h1 className="text-4xl text-white">
                                            <strong>#{getIdFormatted(item.id)}</strong>
                                        </h1>
                                    </div>

                                    {/* Pokémon name */}
                                    <div className="relative z-20">
                                        <h1 className="text-xl text-white font-semibold">
                                            {item.name.toUpperCase()}
                                        </h1>
                                    </div>

                                    {/* Type icons */}
                                    <div className="flex gap-2 mt-2 z-30">
                                        {/* First type */}
                                        <div
                                            className="grid place-items-center items-center w-11 h-11 xs:w-12 xs:h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-4xl"
                                            style={{ backgroundColor: getTypeColor(item.type_1, "light") }}
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
                                                className="xs:w-7 lg:w-8 h-auto"
                                            />
                                        </div>

                                        {/* Second type (if exists) */}
                                        {item.type_2 && (
                                            <div
                                                className="grid place-items-center items-center w-11 h-11 xs:w-12 xs:h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-4xl"
                                                style={{ backgroundColor: getTypeColor(item.type_2, "light") }}
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
                                                    className="xs:w-7 lg:w-8 h-auto"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Pokéball image in background */}
                                    <div className="h-40 xs:h-46 lg:h-46 overflow-hidden absolute right-0 top-1/2 -translate-y-1/2 opacity-8">
                                        <img
                                            src="Pokeball"
                                            alt="Pokeball"
                                            className="w-44 xs:w-56 sm:w-40 md:w-50 lg:w-52 -rotate-30"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
}
