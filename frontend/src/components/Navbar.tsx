import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useScroll } from "./home/ScrollContext";

export default function Navbar() {

    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    const { scrollLeft, setScrollLeft } = useScroll();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    if (!isLoggedIn) {
        return (
            <nav 
                className="flex justify-between"
            >
                <div className={`transition-all duration-400 ${ scrollLeft ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}>
                    <h1 className="text-2xl font-semibold">
                        PokeWiki
                    </h1>
                </div>
                <div className={`transition-all duration-400 ${ scrollLeft ? "-translate-x-[62vw] xxs:-translate-x-[66vw] opacity-100" : "translate-x-0 opacity-100"}`}>
                    <Button
                        type="button"
                        onClick={() => setScrollLeft(false)}
                        className="text-lg font-semibold  transition-transform duration-200 lg:hover:scale-107 rounded-4xl"
                    >
                        { scrollLeft ? "Go back" : "Login" }
                    </Button>
                </div>
            </nav>
        )
    }
}