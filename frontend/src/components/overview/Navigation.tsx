import { MdChevronLeft, MdChevronRight } from "react-icons/md";  

export default function Navigation(
  { canNavigate, passedPokemonCount, setPassedPokemonCount }: 
  { canNavigate: { previous: boolean, next: boolean }, passedPokemonCount: number, setPassedPokemonCount: (value: number) => void }
) {

    return (
      <div className="w-full flex justify-between mt-8 mb-2">
        <div
          onClick={() => {
            canNavigate.previous ? setPassedPokemonCount(passedPokemonCount - 20) : null;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`flex cursor-pointer ${!canNavigate.previous ? "opacity-50" : null}`}
        >
          <MdChevronLeft className="pb-0.5 size-7" />
          <p className="font-semibold">
            Previous
          </p>
        </div>
        <div>
          <p className="font-semibold">
            Page { passedPokemonCount }
          </p>
        </div>
        <div
          onClick={() => {
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

