import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export const Navbar = () => {

    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);

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
            <nav className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">
                        PokeWiki
                    </h1>
                </div>
                <div>
                    <Button
                        type="button"
                        className="text-lg font-semibold  transition-transform duration-200 hover:scale-107 rounded-4xl"
                    >
                        Login
                    </Button>
                </div>
            </nav>
        )
    }
}