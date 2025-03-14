import Image from "@/assets/Charizard-Pokemon-Clip-Art-Transparent-PNG.png"

export const AboutAnime = () => {

    return (
        <div className="grid place-items-center flex-grow gap-10">
            <div>
                <div>
                    <h1 className="text-3xl text-center font-semibold">
                        The World of Pokémon
                    </h1>
                </div>
                <div className="grid gap-3 text-base text-center mt-2">
                    <p>
                        Pokemon is a world where creatures and humans share endless adventures. 
                        Launched in 1996 by Satoshi Tajiri and Ken Sugimori, its idea of capturing 
                        and battling unique monsters quickly became a global hit, expanding from 
                        games to movies.    With over 800 creatures and deep cultural impact, Pokemon
                        continues to inspire with thrilling battles and heartfelt stories that celebrate 
                        exploration and teamwork.

                    </p> 
                </div>
            </div>
            <div className="w-full">
                <img 
                    src={Image} 
                    alt="pokeball" 
                    className="w-full h-full object-cover object-[10%_0%]"
                />
            </div>
        </div>
    )
}