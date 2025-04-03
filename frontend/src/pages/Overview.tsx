import NavbarLoggedIn from "@/components/navbar/NavbarLoggedIn";
import Content from "@/components/overview/Content";
import PokemonList from "@/components/overview/PokemonsList";

export default function Overview() {

    return (
        <div
            className="px-[1.3em] sm:px-[1.8em] "
        >
            <NavbarLoggedIn />
            <Content/>
            <PokemonList />
        </div>
    );
}
