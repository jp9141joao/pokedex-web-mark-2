// Importing reusable UI components
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useEffect, useState } from "react";

// Importing icons for the filter UI
import { MdOutlineMoreHoriz, MdOutlineCheck, MdKeyboardArrowDown } from "react-icons/md";

// Functional component Filter with props for managing filter state
export default function Filter(
    {
        filterValue,           // current value to filter
        setFilterValue,       // function to update filterValue
        filterBy,             // current selected filter criterion
        setFilterBy           // function to update filterBy
    }: {
        filterValue: string,
        setFilterValue: (value: string) => void,
        filterBy: string | null,
        setFilterBy: (value: string | null) => void
    }
) {
    // Local state to manage whether the dropdown menu is open
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    // Array of available filter options
    const filters: string[] = ['ID', 'Name', 'Type', 'Height', 'Weight'];

    // Effect that resets the filter value when no filter is selected
    useEffect(() => {
        if (filterBy === null) {
            setFilterValue('');
        }
    }, [filterBy]);

    return (
        <div className="relative z-50 lg:w-full max-w-[1036px]">
            <div className="flex gap-2">
                {/* Input for typing the filter value */}
                <Input
                    value={filterValue}
                    onChange={(e) => {
                        // Only allow typing if a filter is selected
                        if (filterBy !== null) {
                            setFilterValue(e.target.value);
                        }
                    }}
                    onClick={() => {
                        // Open the dropdown to select a filter if none is selected
                        if (filterBy === null) {
                            setIsOpen(true);
                        }
                    }}
                    placeholder={filterBy === null ? "Select a filter" : `Search for Pokemon`}
                    className="bg-transparent border-1"
                />

                {/* Dropdown menu for selecting filter criterion */}
                <DropdownMenu
                    open={isOpen}
                    onOpenChange={(open) => {
                        if (!open) {
                            setIsOpen(false);
                        }
                    }}
                >
                    <DropdownMenuTrigger>
                        {/* Button that toggles the dropdown */}
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-4xl"
                        >
                            { 
                                filterBy === null ? 
                                    // If no filter is selected, show more icon
                                    <MdOutlineMoreHoriz className="size-5"/> : 
                                    // If filter is selected, show filter name with down arrow
                                    <div className="flex items-center gap-1">
                                        <p>{ filterBy }</p>
                                        <MdKeyboardArrowDown className="size-5"/>
                                    </div>
                            }
                        </Button>
                    </DropdownMenuTrigger>

                    {/* Dropdown content listing all filter options */}
                    <DropdownMenuContent align="end">
                        {
                            filters.map((item: string) => (
                                <DropdownMenuLabel 
                                    key={item}
                                    onClick={() => {
                                        // If different filter selected, set it
                                        if (filterBy !== item) {
                                            setFilterBy(item);
                                        } 
                                        // If same filter clicked again, unset it
                                        else if (filterBy === item) {
                                            setFilterBy(null);
                                        }
                                        // Close dropdown after selection
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-1"
                                >
                                    {/* Display filter name and a check icon if it is selected */}
                                    { item } 
                                    { filterBy === item ? <MdOutlineCheck className="size-5"/> : null }
                                </DropdownMenuLabel>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
