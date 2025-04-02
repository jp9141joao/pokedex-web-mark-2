import { Sidebar } from "../Sidebar";


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
        <nav className="flex justify-between items-center">
            <div>
                <h1 className="text-xl xxs:text-2xl font-semibold">
                    PokeWiki
                </h1>
            </div>
            <div className="hidden lg:inline-block">

            </div>
            <div className="lg:hidden">
                <Sidebar items={ items }/>
            </div>
        </nav>
    )
}