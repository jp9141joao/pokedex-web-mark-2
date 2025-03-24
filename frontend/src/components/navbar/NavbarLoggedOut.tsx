import { useEffect, useState, useRef, useCallback } from "react";
import { useScroll } from "../home/ScrollContext";
import { Button } from "../ui/button";
import LoginSection from "../home/LoginSection";


export default function NavbarLoggedOut() {

  const { scroll, setScroll } = useScroll();
  const [ showDialog, setShowDialog ] = useState<boolean>(false);
  const [ maxTranslate, setMaxTranslate ] = useState<number>(0);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      localStorage.removeItem("authToken");
    }

  }, []);

  const updateTranslate = useCallback(() => {

    if (navRef.current && buttonRef.current) {
      setMaxTranslate(navRef.current.clientWidth - buttonRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {

    updateTranslate();

    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(() => updateTranslate());

      if (navRef.current) {
        resizeObserver.observe(navRef.current);
      }

      if (buttonRef.current) {
        resizeObserver.observe(buttonRef.current);
      };

      return () => resizeObserver.disconnect();

    } else {
      window.addEventListener("resize", updateTranslate);
      return () => window.removeEventListener("resize", updateTranslate);
    }

  }, [updateTranslate]);

  const handleButtonClick = () => {

    if (scroll == "Right") {
      setScroll("Left");
    } else {
      setShowDialog(true);
    }
  };

  return (
    <nav ref={navRef} className="max-w-[1536px] w-full h-[40px] relative flex justify-between overflow-hidden">
       <div
        className={`
          absolute transition-all duration-400 transform z-10
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
      <div 
        className={`
          transition-all duration-400 transform
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
      <div
        ref={buttonRef}
        className="right-0 transition-all duration-400 transform absolute top-0 z-50"
        style={{
          transform: 
            scroll == "Right" ? `translateX(-${maxTranslate}px)` :
            scroll == "Bottom" ? 'translateY(-100vh)' : 
            "translateX(0)",
          opacity: scroll == "Bottom" ? "0" : "100",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          willChange: "transform, opacity"
        }}
        
      >
        <Button
          onClick={handleButtonClick}
          className="text-sm xxs:text-base xs:text-sm sm:text-base lg:text-lg font-semibold transition-transform duration-200 rounded-4xl"
          style={{color: "white"}}
        >
          { scroll == "Right" ? "Go back" : "Log In" }
        </Button>
        <LoginSection 
          showDialog={showDialog} 
          setShowDialog={setShowDialog}
        />
      </div>
     
    </nav>
  );
}
