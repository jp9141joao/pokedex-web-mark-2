// Importing Pokeball SVG asset
import Pokeball from "@/assets/pokeball.svg"

// Importing logout icon from react-icons
import { LuLogOut } from "react-icons/lu";

// Importing useNavigate hook to programmatically navigate between routes
import { useNavigate } from "react-router-dom";

// Defining the NavbarLoggedIn component
export default function NavbarLoggedIn() {

    // Using useNavigate to navigate to different pages
    const navigate = useNavigate();

    return (
        // Navigation bar container with specific styling
        <nav className="lg:w-full max-w-[1536px] relative flex justify-between items-start py-[0.8em] h-20 overflow-hidden">
            
            {/* Greeting message */}
            <div>
                <h1 className="text-xl xxs:text-2xl font-semibold">
                    Hello, Trainer! 👋
                </h1>
            </div>

            {/* Logout icon with click handler to navigate to '/home' */}
            <div 
                className="z-50 mt-0.5 cursor-pointer"
                onClick={() => navigate('/home')}  // Navigates to the home page when clicked
            >
                <LuLogOut className="size-6"/>  {/* Logout icon */}
            </div>

            {/* Decorative Pokeball image positioned to the right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 ">
                <img 
                    src={Pokeball}  // Pokeball image source
                    alt="pokeball"  // Alt text for accessibility
                    className="min-w-58 xs:min-w-64 overflow-hidden opacity-8 z-0"
                    style={{
                        // Applying a mask for gradient transparency effect
                        WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
                        mask: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)"
                    }}
                />
            </div>
        </nav>
    )
}
