import NavbarLoggedIn from "@/components/navbar/NavbarLoggedIn"; 
// Imports the navigation bar component for users who are logged in.

import Filter from "@/components/overview/Filter"; 
// Imports the Filter component to allow filtering of Pokémon in the overview.

import Navigation from "@/components/overview/Navigation"; 
// Imports the Navigation component to handle pagination controls (previous/next).

import PokemonList from "@/components/overview/PokemonsList"; 
// Imports the component that renders the list of Pokémon based on filter and pagination.

import { Navigate } from "@/components/utils/types"; 
// Imports the Navigate type, which defines the shape of pagination controls (previous and next flags).

import { useEffect, useState } from "react"; 
// Imports React hooks: useEffect for side effects and useState for local component state.

export default function Overview() {
  // Local state for the filter text entered by the user (string).
  const [filterValue, setFilterValue] = useState<string>('');

  // Local state for the filter category (could be type, name, etc.). Starts as null.
  const [filterBy, setFilterBy] = useState<string | null>(null);

  // Local state to track how many Pokémon have been passed/loaded so far (for pagination).
  const [passedPokemonCount, setPassedPokemonCount] = useState<number>();

  // Local state to indicate whether Pokémon data is currently loading.
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Local state for pagination flags indicating if “previous” or “next” navigation is allowed.
  const [canNavigate, setCanNavigate] = useState<Navigate>({ previous: false, next: true });

  // Effect to store the current passedPokemonCount in sessionStorage whenever it changes.
  useEffect(() => {
    if (passedPokemonCount !== undefined) {
      sessionStorage.setItem('passedPokemonCount', passedPokemonCount.toString());
    }
  }, [passedPokemonCount]);

  // Effect to retrieve passedPokemonCount from sessionStorage when the component first mounts.
  useEffect(() => {
    const value = sessionStorage.getItem('passedPokemonCount');

    if (value) {
      // If a value exists in sessionStorage, parse it to a number and set state.
      setPassedPokemonCount(Number(value));
    } else {
      // Otherwise, initialize passedPokemonCount to 0.
      setPassedPokemonCount(0);
    }
  }, []);

  return (
    <div 
      className="
        w-full flex flex-col lg:items-center 
        min-h-screen px-[1.3em] sm:px-[1.8em]
      "
    >
      {/* Renders the navigation bar for logged-in users */}
      <NavbarLoggedIn />

      {/* 
        Renders the Filter component, passing:
        - filterValue: current filter text
        - setFilterValue: setter to update filter text
        - filterBy: current filter category
        - setFilterBy: setter to update filter category
      */}
      <Filter
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />

      {/*
        Renders the Pokémon list, passing:
        - filterValue and filterBy: filter criteria
        - passedPokemonCount: how many Pokémon have already been loaded (default to 0)
        - isLoading: whether the list is currently loading
        - setIsLoading: setter to update loading state
        - setCanNavigate: setter to update pagination flags
      */}
      <PokemonList
        filterValue={filterValue}
        filterBy={filterBy}
        passedPokemonCount={passedPokemonCount || 0}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setCanNavigate={setCanNavigate}
      />

      {/*
        Renders the pagination controls, passing:
        - canNavigate: flags for enabling “previous” and “next” buttons
        - passedPokemonCount: how many Pokémon have already been loaded (default to 0)
        - setIsLoading: setter to toggle loading state when navigating
        - setPassedPokemonCount: setter to update how many Pokémon have been passed after navigation
      */}
      <Navigation 
        canNavigate={canNavigate} 
        passedPokemonCount={passedPokemonCount || 0} 
        setIsLoading={setIsLoading} 
        setPassedPokemonCount={setPassedPokemonCount} 
      />
    </div>
  );
}
