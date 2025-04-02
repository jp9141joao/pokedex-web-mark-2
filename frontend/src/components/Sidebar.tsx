
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";

export const Sidebar = () => {
    
    const [ showSheet, setShowSheet ] = useState<boolean>(false);
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

    useEffect(() => {
        function handleResize() {

            if (window.innerWidth > 640) {
                setShowSheet(false);
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <Sheet
            open={showSheet}
            onOpenChange={(open) => {
                
                if (!open) {
                    setShowSheet(false);
                }
            }}
        >
            <SheetTrigger
                onClick={() => setShowSheet(!showSheet)}
                asChild
            >
                {
                    showSheet ?
                    <HiMenuAlt1 className="icon-responsive"/> :
                    <HiMenuAlt3 className="icon-responsive"/>
                }
            </SheetTrigger>
            <SheetContent side="left">
                <div className="w-full grid gap-5 place-items-start mx-[6vw]"  style={{border: '1px solid red'}}>
                    <div className="mt-[12vw]">
                        <h1 className="title-responsive">
                            PokeWiki
                        </h1>
                    </div>
                    <div className="grid gap-3">
                        {
                            items.map((item: any) => (
                                <Link
                                    key={ item.name }
                                    to={ item.href }
                                    className="para-responsive"
                                >
                                    { item.name }
                                </Link>
                            ))
                        }
                    </div>
                    <div>
                    <div className="w-full mt-3" style={{border: '1px solid red'}}>
                        <Button className="w-full">
                            Settings
                        </Button>
                    </div>
                </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}