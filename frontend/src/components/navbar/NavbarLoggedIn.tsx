import { Sidebar } from "../Sidebar";
import Pokeball from "@/assets/pokeball.svg"

export default function NavbarLoggedIn() {

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
    ]

    return (
        <nav className="relative flex justify-between items-start py-[0.8em] h-20 overflow-hidden">
            <div>
                <h1 className="text-xl xxs:text-2xl font-semibold">
                    Hello, Johnn! 👋
                </h1>
            </div>
            <div className="hidden lg:inline-block">

            </div>
            <div className="lg:hidden z-50">
                <Sidebar items={ items }/>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 ">
                <img 
                    src={Pokeball} 
                    alt="pokeball"
                    className="min-w-[60vw] overflow-hidden -rotate-10 opacity-8 z-0"
                    style={{
                        WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
                        mask: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)"
                      }}
                />
            </div>
        </nav>
    )
}