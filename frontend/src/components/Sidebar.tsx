import { useEffect, useState } from "react"; 
// React hooks: useState for local state, useEffect for side effects (e.g., window resize listener).

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"; 
// Imports a Sheet component and its subcomponents:
// - Sheet: container that controls open/close state.
// - SheetTrigger: element that toggles the sheet.
// - SheetContent: content area of the sheet.

import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"; 
// Imports two menu icon variants from react-icons: 
// - HiMenuAlt1 (e.g., close icon style).
// - HiMenuAlt3 (e.g., open icon style).

import { Button } from "./ui/button"; 
// Imports a Button component for consistent styling.

import { useNavigate } from "react-router-dom"; 
// React Router hook to programmatically navigate between routes.

export const Sidebar = (
  /* If needed, you could accept an items prop like:
     { items }: { items: { name: string, href: string }[] }
     (not used here though)
  */
) => {
  // Local state to track whether the sheet (sidebar) is open or closed.
  const [showSheet, setShowSheet] = useState<boolean>(false);

  // Hook to obtain a navigation function for programmatic routing.
  const navigate = useNavigate();

  // useEffect to close the sidebar automatically when the window is resized beyond a breakpoint.
  useEffect(() => {
    function handleResize() {
      // If the window width exceeds 640px (e.g., small breakpoint), ensure the sheet is closed.
      if (window.innerWidth > 640) {
        setShowSheet(false);
      }
    }

    window.addEventListener("resize", handleResize);
    // Run once to set initial state based on current window size.
    handleResize();

    // Cleanup: remove the resize listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Sheet component wraps the trigger and content, controlling open/close.
    <Sheet
      open={showSheet}
      onOpenChange={(open) => {
        // If the sheet is closed externally, update local state.
        if (!open) {
          setShowSheet(false);
        }
      }}
    >
      {/* SheetTrigger toggles the sheet open/closed when clicked */}
      <SheetTrigger
        onClick={() => setShowSheet(!showSheet)}
        asChild // Render the child directly, without extra wrapper
      >
        {showSheet ? (
          // When sheet is open, display a “close” style icon
          <HiMenuAlt1 className="icon-responsive" />
        ) : (
          // When sheet is closed, display an “open” menu icon
          <HiMenuAlt3 className="icon-responsive" />
        )}
      </SheetTrigger>

      {/* SheetContent defines the sidebar content sliding in from the left */}
      <SheetContent side="left" className="rounded-r-2xl">
        <div className="w-full grid gap-5 px-[6vw]">
          {/* 
            Top section with vertical margin to push content down 
            (e.g., title placement).
          */}
          <div className="mt-[6vh]">
            <h1 className="title-responsive">
              PokeWiki
            </h1>
          </div>

          <div>
            <div className="w-full mt-2">
              {/* 
                Button to navigate back to the "/home" route when clicked.
                Uses full width for styling consistency.
              */}
              <Button 
                onClick={() => navigate('/home')}
                className="w-full"
              >
                Go back
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};