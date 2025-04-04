import NavbarLoggedIn from "@/components/navbar/NavbarLoggedIn";
import Filter from "@/components/overview/Filter";
import PokemonList from "@/components/overview/PokemonsList";

export default function Overview() {

    return (
        <div
            className="px-[1.3em] sm:px-[1.8em]"
        >
            <NavbarLoggedIn />
            <Filter />
            <PokemonList />
        </div>
    );
}
