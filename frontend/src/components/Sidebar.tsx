
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
//import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Sidebar = (/*{ items }: { items: { name: string, href: string }[] }*/) => {
    
    //const { pathname } = useLocation();
    const [ showSheet, setShowSheet ] = useState<boolean>(false);
    const navigate = useNavigate();

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
            <SheetContent side="left" className="rounded-r-2xl">
                <div className="w-full grid gap-5 px-[6vw]">
                    <div className="mt-[6vh]">
                        <h1 className="title-responsive">
                            PokeWiki
                        </h1>
                    </div>
                    {/*
                    <div className="grid gap-3">
                        {
                            items.map((item: any) => (
                                <Link
                                    key={ item.name }
                                    to={ item.href }
                                    className={`
                                        para-responsive
                                        ${ item.href == pathname ? 'underline' : null }
                                    `}
                                >
                                    { item.name }
                                </Link>
                            ))
                        }
                    </div>
                    */}
                    <div>
                    <div className="w-full mt-2">
                        <Button 
                            onClick={() => navigate('/home')}
                            className="w-full"
                        >
                            Go back
                        </Button>
                    </div>
                </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}