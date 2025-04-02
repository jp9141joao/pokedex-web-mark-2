import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Sidebar } from "../Sidebar";


export default function NavbarLoggedIn() {

    return (
        <nav className="flex justify-between items-center">
            <div>
                <h1 className="text-xl xxs:text-2xl font-semibold font-semibold">
                    PokeWiki
                </h1>
            </div>
            <div>
                <Sidebar />
            </div>
        </nav>
    )
}