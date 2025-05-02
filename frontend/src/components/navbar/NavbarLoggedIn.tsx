import Pokeball from "@/assets/pokeball.svg"
import { LuLogOut } from "react-icons/lu";
import { Navigate, useNavigate } from "react-router-dom";

export default function NavbarLoggedIn() {

    const navigate = useNavigate();

    /*
    const items = [
        {
            name: 'Overview',
            href: '/overview'
        },
        {
            name: 'Pokemon Details',
            href: '/pokemon-details'
        },
        {
            name: 'Compare Pokemons',
            href: '/trips'
        },
        {
            name: 'My Pokemon List',
            href: '/my-pokemon-list'
        },
    ];
    */

    return (
        <nav className="lg:w-full max-w-[1536px] relative flex justify-between items-start py-[0.8em] h-20 overflow-hidden">
            <div>
                <h1 className="text-xl xxs:text-2xl font-semibold">
                    Hello, Trainer! 👋
                </h1>
            </div>
            <div 
                className="z-50 mt-0.5 cursor-pointer"
                onClick={() => navigate('/home')}
            >
                <LuLogOut className="size-6"/>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 ">
                <img 
                    src={Pokeball} 
                    alt="pokeball"
                    className="min-w-58 xs:min-w-64 overflow-hidden opacity-8 z-0"
                    style={{
                        WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
                        mask: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)"
                      }}
                />
            </div>
        </nav>
    )
}