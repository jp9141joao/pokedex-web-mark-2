// Importing required hooks and components
import { useRef, useCallback, useLayoutEffect } from "react";
import { useScroll } from "../home/ScrollContext";  // Custom context for managing scroll state
import { Button } from "../ui/button";  // Reusable Button component
import { useNavigate } from "react-router-dom";  // For navigation between routes

// Defining NavbarLoggedOut component
export default function NavbarLoggedOut() {
  // Destructuring scroll state and its setter from context
  const { scroll, setScroll } = useScroll();

  // Refs for the nav element and the button
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Navigation function from React Router
  const navigate = useNavigate();

  // Function to update CSS variable based on element widths
  const updateTranslate = useCallback(() => {
    if (navRef.current && buttonRef.current) {
      const newMaxTranslate = navRef.current.clientWidth - buttonRef.current.clientWidth;
      // Set CSS variable to control maximum translation dynamically
      document.documentElement.style.setProperty('--max-translate', `${newMaxTranslate}px`);
    }
  }, []);

  // Update translation on layout changes and observe element resizing
  useLayoutEffect(() => {
    updateTranslate();

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateTranslate);
      if (navRef.current) resizeObserver.observe(navRef.current);
      if (buttonRef.current) resizeObserver.observe(buttonRef.current);
    } else {
      // Fallback for browsers without ResizeObserver
      window.addEventListener("resize", updateTranslate);
    }

    // Cleanup observer or event listener on component unmount
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateTranslate);
    };
  }, [updateTranslate]);

  // Handler for button click
  const handleButtonClick = () => {
    // If scrolled right, go back to left; otherwise, navigate to overview page
    scroll === "Right" ? setScroll("Left") : navigate('/overview');
  };

  return (
    // Navbar container with specific width and positioning
    <nav ref={navRef} className="max-w-[1536px] w-full h-[40px] relative flex justify-between overflow-hidden">
      
      {/* "Go back" button, shown only when scroll is at Bottom */}
      <div
        className={`
          ml-[1.3em] sm:ml-[1.8em] absolute transition-all duration-400 transform z-10 
          ${ scroll == "Bottom" ? "translate-y-0 opacity-100" : "-translate-y-[100vh] opacity-0" }
        `}
      >                
        <Button
          onClick={() => setScroll("Left")}
          className="text-sm xxs:text-base xs:text-sm sm:text-base lg:text-lg font-semibold transition-transform duration-200 rounded-4xl"
          style={{color: "white"}}
        >
          Go back
        </Button>
      </div>

      {/* PokeWiki title with animations based on scroll state */}
      <div 
        className={`
          ml-[1.3em] sm:ml-[1.8em] transition-all duration-400 transform
          ${ 
            scroll == "Right" ? "-translate-x-full opacity-0" : 
            scroll == "Bottom" ? "-translate-y-[100vh] opacity-0" :
            "translate-x-0 opacity-100" 
          }
        `}
      >
        <h1 className="text-xl xxs:text-2xl font-semibold">
          PokeWiki
        </h1>
      </div>

      {/* Button on the right side, animating based on scroll state */}
      <div
        ref={buttonRef}
        className="right-0 transition-all duration-300 ease-in-out transform absolute top-0 z-50"
        style={{
          transform:
            scroll === "Right" 
              ? "translateX(calc(-1 * var(--max-translate)))" 
              : scroll === "Bottom" 
              ? "translateY(-100vh)" 
              : "translateX(0)",
          opacity: scroll === "Bottom" ? "0" : "100",
        }}
      >
        <Button
          onClick={handleButtonClick}
          className="mx-[1.3em] sm:mx-[1.8em] text-sm xxs:text-base xs:text-sm sm:text-base lg:text-lg font-semibold transition-transform duration-200 rounded-4xl"
          style={{ color: "white" }}
        >
          {/* Button text changes depending on scroll state */}
          {scroll === "Right" ? "Go back" : "Enter"}
        </Button>
      </div>
    </nav>
  );
}
