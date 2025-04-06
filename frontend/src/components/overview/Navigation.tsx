import { MdChevronLeft, MdChevronRight } from "react-icons/md";  
import { Navigate } from "../utils/types";

export default function Navigation(
  { canNavigate, passedPokemonCount, setIsLoading, setPassedPokemonCount }: 
  { canNavigate: Navigate, passedPokemonCount: number, setIsLoading: (value: boolean) => void, setPassedPokemonCount: (value: number) => void }
) {

    return (
      <div className="flex w-full justify-between mt-5 mb-2">
        <div
          onClick={() => {
            setIsLoading(true);
            canNavigate.previous ? setPassedPokemonCount(passedPokemonCount - 20) : null;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`flex cursor-pointer ${!canNavigate.previous ? "opacity-50" : null}`}
        >
          <MdChevronLeft className="pb-0.5 size-7" />
          <p className="font-semibold">
            Prev
          </p>
        </div>
        <div>
          <p className="font-semibold">
            Page { passedPokemonCount / 20 }
          </p>
        </div>
        <div
          onClick={() => {
            setIsLoading(true);
            canNavigate.next ? setPassedPokemonCount(passedPokemonCount + 20) : null;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`flex cursor-pointer ${!canNavigate.next ? "opacity-50" : null}`}
        >
          <p className="font-semibold">
            Next
          </p>
          <MdChevronRight className="pb-0.5 size-7" />

        </div>
      </div>
    )
}

