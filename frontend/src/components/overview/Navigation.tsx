// Importing left and right chevron icons for navigation
import { MdChevronLeft, MdChevronRight } from "react-icons/md";  

// Importing type definition for navigation flags
import { Navigate } from "../utils/types";

// Functional component Navigation
export default function Navigation(
  { 
    canNavigate,                // Object with flags for previous and next navigation availability
    passedPokemonCount,         // Number of Pokémon already passed (used for pagination)
    setIsLoading,               // Function to set loading state
    setPassedPokemonCount       // Function to update passed Pokémon count
  }: { 
    canNavigate: Navigate, 
    passedPokemonCount: number, 
    setIsLoading: (value: boolean) => void, 
    setPassedPokemonCount: (value: number) => void 
  }
) {

    return (
      <div className="lg:w-full max-w-[1536px] flex w-full justify-between mt-5 mb-2">
        
        {/* Previous navigation button */}
        <div
          onClick={() => {
            setIsLoading(true);  // Start loading when clicking
            // Only navigate to previous page if allowed
            canNavigate.previous ? setPassedPokemonCount(passedPokemonCount - 24) : null;
            // Smoothly scroll to top after navigation
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`flex cursor-pointer ${!canNavigate.previous ? "opacity-50" : null}`}
          // Reduce opacity if previous navigation is not available
        >
          <MdChevronLeft className="pb-0.5 size-7" />
          <p className="font-semibold">
            Prev
          </p>
        </div>

        {/* Current page display */}
        <div>
          <p className="font-semibold">
            Page { (passedPokemonCount / 24) + 1 }
            {/* Page number calculated by dividing total passed by items per page (24) */}
          </p>
        </div>

        {/* Next navigation button */}
        <div
          onClick={() => {
            setIsLoading(true);  // Start loading when clicking
            // Only navigate to next page if allowed
            canNavigate.next ? setPassedPokemonCount(passedPokemonCount + 24) : null;
            // Smoothly scroll to top after navigation
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`flex cursor-pointer ${!canNavigate.next ? "opacity-50" : null}`}
          // Reduce opacity if next navigation is not available
        >
          <p className="font-semibold">
            Next
          </p>
          <MdChevronRight className="pb-0.5 size-7" />
        </div>
      </div>
    )
}
