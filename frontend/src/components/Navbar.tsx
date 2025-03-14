import { 
    useEffect, 
    useState 
} from "react"
import { Button } from "./ui/button"
import { useScroll } from "./home/ScrollContext";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import IconGoogle from "@/assets/icons8-google-logo-48.png"

export default function Navbar() {

    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    const { scrollLeft, setScrollLeft } = useScroll();
    const [ showModal, setShowModal ] = useState<boolean>(false);

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
                    <div>
                        <Button
                            type="button"
                            onClick={() => {

                                if (scrollLeft) {
                                    setScrollLeft(false);
                                } else {
                                    setShowModal(true);
                                }
                            }}
                            className="text-lg font-semibold  transition-transform duration-200 lg:hover:scale-107 rounded-4xl"
                        >
                            { scrollLeft ? "Go back" : "Login" }
                        </Button>
                    </div>
                    <Dialog
                        open={showModal}
                        onOpenChange={(open) => {
                            
                            if (!open) {
                                setShowModal(false);
                            }
                        }}
                    >
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>
                                    Sign In
                                </DialogTitle>
                                <DialogDescription className="mt-3">
                                    <Button
                                        type="button"
                                        variant={"outline"}
                                        className="w-full flex grid-2 items-center rounded-4xl border-black"
                                    >
                                        <img src={IconGoogle} alt="" className="size-6" />
                                        <p>
                                            Login with Google
                                        </p>
                                    </Button>
                                </DialogDescription>
                            </DialogHeader>
                            <div>

                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </nav>
        )
    }
}