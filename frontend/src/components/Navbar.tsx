import { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "./ui/button";
import { useScroll } from "./home/ScrollContext";
import LoginSection from "../components/home/LoginSection";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { scrollLeft, setScrollLeft } = useScroll();
  const [showDialog, setShowDialog] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const updateTranslate = useCallback(() => {
    if (navRef.current && loginRef.current) {
      setMaxTranslate(navRef.current.clientWidth - loginRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    updateTranslate();
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(() => updateTranslate());
      if (navRef.current) resizeObserver.observe(navRef.current);
      if (loginRef.current) resizeObserver.observe(loginRef.current);
      return () => resizeObserver.disconnect();
    } else {
      window.addEventListener("resize", updateTranslate);
      return () => window.removeEventListener("resize", updateTranslate);
    }
  }, [updateTranslate]);

  if (isLoggedIn) return null;

  const titleClasses = `transition-all duration-400 transform ${
    scrollLeft ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
  }`;

  const loginContainerStyle = {
    right: 0,
    transform: scrollLeft ? `translateX(-${maxTranslate}px)` : "translateX(0)",
  };

  const handleButtonClick = () => {
    if (scrollLeft) {
      setScrollLeft(false);
    } else {
      setShowDialog(true);
    }
  };

  return (
    <nav ref={navRef} className="w-full h-[36px] relative flex justify-between overflow-hidden">
      <div className={titleClasses}>
        <h1 className="text-2xl font-semibold">PokeWiki</h1>
      </div>
      <div
        ref={loginRef}
        className="transition-all duration-400 transform absolute top-0"
        style={loginContainerStyle}
      >
        <Button
          type="button"
          onClick={handleButtonClick}
          className="text-sm xxs:text-base xs:text-sm sm:text-lg lg:text-base font-semibold transition-transform duration-200 lg:hover:scale-107 rounded-4xl"
        >
          {scrollLeft ? "Go back" : "Log In"}
        </Button>
        <LoginSection showDialog={showDialog} setShowDialog={setShowDialog} />
      </div>
    </nav>
  );
}
