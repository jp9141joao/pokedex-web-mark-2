import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import { MdOutlineMoreHoriz, MdOutlineCheck, MdKeyboardArrowDown } from "react-icons/md";
  
export default function Filter(
    {
        filterValue, 
        setFilterValue, 
        filterBy, 
        setFilterBy
    }: {
        filterValue: string,
        setFilterValue: (value: string) => void,
        filterBy: string | null,
        setFilterBy: (value: string | null) => void
    }
) {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const filters: string[] = ['ID', 'Name', 'Type', 'Height', 'Weight' /* , 'HP', 'ATK', 'DEF', 'SP. ATK', 'SP. DEF', 'SPD' */];

    useEffect(() => {
        if (filterBy === null) {
            setFilterValue('');
        }
    }, [filterBy]);

    return (
        <div className="relative z-50 lg:w-full max-w-[1036px]">
            <div className="flex gap-2">
                <Input
                    value={filterValue}
                    onChange={(e) => {
                        if (filterBy !== null) {
                            setFilterValue(e.target.value);
                        }
                    }}
                    onClick={() => {
                        if (filterBy === null) {
                            setIsOpen(true);
                        }
                    }}
                    placeholder={filterBy === null ? "Select a filter" : `Search for Pokemon`}
                    className="bg-transparent border-1"
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
                    <DropdownMenuContent align="end">
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