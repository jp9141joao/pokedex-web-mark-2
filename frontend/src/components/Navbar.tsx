import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { useScroll } from "./home/ScrollContext";
import LoginSection from "../components/home/LoginSection";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { scrollLeft, setScrollLeft } = useScroll();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  // Ref do contêiner pai (nav) e do elemento de login (botão + seção)
  const navRef = useRef<HTMLElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  // Guarda a distância máxima que o elemento pode se mover (para não sair do pai)
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  // Calcula a distância máxima baseada na largura do pai e do elemento
  useEffect(() => {
    const updateTranslate = () => {
      if (navRef.current && loginRef.current) {
        const parentWidth = navRef.current.clientWidth;
        const elementWidth = loginRef.current.clientWidth;
        // A distância máxima é a diferença entre a largura do pai e a do elemento
        setMaxTranslate(parentWidth - elementWidth);
      }
    };

    updateTranslate();
    window.addEventListener("resize", updateTranslate);
    return () => window.removeEventListener("resize", updateTranslate);
  }, []);

  if (!isLoggedIn) {
    return (
      <nav
        ref={navRef}
        className="w-full relative flex justify-between overflow-hidden"
      >
        {/* Título com transição suave */}
        <div
          className={`transition-all duration-400 transform ${
            scrollLeft ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <h1 className="text-2xl font-semibold">PokeWiki</h1>
        </div>

        {/* Container do botão de login + LoginSection */}
        <div
          ref={loginRef}
          className="transition-all duration-400 transform absolute top-0"
          style={{
            right: 0,
            // Se scrollLeft for true, desloca para a esquerda até bater na margem do nav
            transform: scrollLeft ? `translateX(-${maxTranslate}px)` : "translateX(0)",
          }}
        >
          <div>
            <Button
              type="button"
              onClick={() => {
                if (scrollLeft) {
                  setScrollLeft(false);
                } else {
                  setShowDialog(true);
                }
              }}
              className="text-sm xxs:text-base xs:text-sm sm:text-lg lg:text-base font-semibold transition-transform duration-200 lg:hover:scale-107 rounded-4xl"
            >
              {scrollLeft ? "Go back" : "Log In"}
            </Button>
          </div>
          <LoginSection showDialog={showDialog} setShowDialog={setShowDialog} />
        </div>
      </nav>
    );
  }

  return null;
}
