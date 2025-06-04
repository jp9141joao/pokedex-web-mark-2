import Credits from "@/components/Credits"; // Imports the Credits component to display footer credits or acknowledgments.
import NavbarLoggedOut from "@/components/navbar/NavbarLoggedOut"; // Imports the navigation bar component for users who are not logged in.
import Content from "@/components/home/Content"; // Imports the main content section of the Home page.
import { ScrollProvider } from "@/components/home/ScrollContext"; // Imports a context provider that manages scroll-related state for its children.
import { useEffect } from "react"; // Imports the useEffect hook from React for side effects.

export default function Home() {
  // useEffect hook runs once after the component mounts to set and update a CSS variable for viewport height.
  useEffect(() => {
    // Function to calculate and set --vh CSS variable based on the window’s inner height.
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      // Updates the --vh custom property so that elements can use it (e.g., height: calc(var(--vh, 1vh) * 100)).
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh(); // Initial call to set the CSS variable on mount.
    window.addEventListener("resize", setVh); // Listen for window resize to recalculate --vh.
    return () => window.removeEventListener("resize", setVh); 
    // Cleanup: remove the resize event listener when the component unmounts.
  }, []);

  return (
    <div
      className="
        flex flex-col lg:items-center
        min-w-[340px] min-h-[620px] xxs:min-h-[720px] xs:min-h-[610px] sm:min-h-[710px] md:min-h-[910px]
        lg:min-h-[550px] xl:min-h-[650px]
        h-[calc(var(--vh,1vh)*100)]
        py-[0.8em] sm:py-[1.1em]
        overflow-hidden
      "
    >
      {/* ScrollProvider supplies scroll-related context to all children */}
      <ScrollProvider>
        <NavbarLoggedOut /> {/* Renders the navigation bar for logged-out users */}
        <Content />         {/* Renders the main content area of the Home page */}
        <Credits />         {/* Renders the footer or credits section */}
      </ScrollProvider>
    </div>
  );
}
