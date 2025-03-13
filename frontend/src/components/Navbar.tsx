import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useScroll } from "./home/ScrollContext";

export const Navbar = () => {

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
                className={`
                    flex justify-between
                    transition-all duration-400
                `}
            >
                <div>
                    <h1 className="text-2xl font-semibold">
                        PokeWiki
                    </h1>
                </div>
                <div>
                    <Button
                        type="button"
                        onClick={() => setScrollLeft(false)}
                        className="text-lg font-semibold  transition-transform duration-200 hover:scale-107 rounded-4xl"
                    >
                        { scrollLeft ? "Go back" : "Login" }
                    </Button>
                </div>
            </nav>
        )
    }
}