import { useEffect, useState, useRef, useCallback } from "react";
import { useScroll } from "../home/ScrollContext";
import { Button } from "../ui/button";
import LoginSection from "../home/LoginSection";


export default function NavbarLoggedOut() {

  const { scrollLeft, setScrollLeft } = useScroll();
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

    if (scrollLeft) {
      setScrollLeft(false);
    } else {
      setShowDialog(true);
    }
  };

  return (
    <nav ref={navRef} className="w-full h-[36px] relative flex justify-between overflow-hidden">
      <div 
        className={`
          transition-all duration-400 transform
          ${ scrollLeft ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100" }
        `}
      >
        <h1 className="text-xl xxs:text-2xl font-semibold">
          PokeWiki
        </h1>
      </div>
      <div
        ref={buttonRef}
        className={`
          right-0 transition-all duration-400 transform absolute top-0
        `}
        style={{
          transform: scrollLeft ? `translateX(-${maxTranslate}px)` : "translateX(0)"
        }}
      >
        <Button
          type="button"
          onClick={handleButtonClick}
          className="text-sm xxs:text-base xs:text-sm sm:text-base lg:text-lg font-semibold transition-transform duration-200 rounded-4xl"
        >
          { scrollLeft ? "Go back" : "Log In" }
        </Button>
        <LoginSection 
          showDialog={showDialog} 
          setShowDialog={setShowDialog} 
        />
      </div>
    </nav>
  );
}
