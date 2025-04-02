import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { MdOutlineMoreHoriz, MdOutlineCheck, MdKeyboardArrowDown } from "react-icons/md";
  
export default function Filter() {

    const [ filterValue, setFilterValue ] = useState<string>('');
    const [ filterBy, setFilterBy ] = useState<string | null>(null);
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const filters: string[] = ['Id', 'Name', 'Type', 'Height', 'Width', 'HP', 'ATK', 'DEF', 'SP. ATK', 'SP. DEF', 'SPD'];

    return (
        <div className="mt-10">
            <div className="flex gap-2">
                <Input
                    value={filterValue}
                    onChange={(e) => {
                        if (filterBy !== null) {
                            setFilterValue(e.target.value);
                        } else {
                            setFilterValue('');
                        }
                    }}
                    onClick={() => {
                        if (filterBy === null) {
                            setIsOpen(true);
                        }
                    }}
                    placeholder={filterBy === null ? "Select a filter" : `Search for Pokemon`}
                />  
                <DropdownMenu
                    open={isOpen}
                    onOpenChange={(open) => {
                        if (!open) {
                            setIsOpen(false);
                        }
                    }}
                >
                    <DropdownMenuTrigger>
                        <Button
                            size={"sm"}
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-4xl"
                        >
                            { 
                                filterBy === null ? 
                                <MdOutlineMoreHoriz className="size-5"/> : 
                                <div className="flex items-center gap-1">
                                    <p>
                                        { filterBy }
                                    </p>
                                    <MdKeyboardArrowDown className="size-5"/>
                                </div>
                            }
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="h-[180px]" align="end">
                        {
                            filters.map((item: string) => (
                                <DropdownMenuLabel 
                                    key={item}
                                    onClick={() => {
                                        if (filterBy !== item) {
                                            setFilterBy(item);
                                        } else if (filterBy === item) {
                                            setFilterBy(null);
                                        }

                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-1"
                                >
                                    { item } { filterBy === item ? <MdOutlineCheck className="size-5"/> : null }
                                </DropdownMenuLabel>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}