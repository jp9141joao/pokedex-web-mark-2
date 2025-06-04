import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
// Imports routing components from react-router-dom:
// BrowserRouter: Wraps the app to enable client-side routing.
// Routes: Container for all defined routes.
// Route: Defines a specific route and its corresponding component.
// Navigate: Performs an automatic redirect from one route to another.

import Home from "./pages/Home"; 
// Imports the Home page component.

import Overview from "./pages/Overview"; 
// Imports the Overview page component.

function App() {
  return (
    // Wraps the entire application in BrowserRouter to enable routing based on URL.
    <BrowserRouter> 
      {/* Defines all the routes for this application */}
      <Routes> 
        {/* 
          Matches any path (*) and redirects to "/overview".
          This ensures that any unknown URL will navigate the user to the Overview page.
        */}
        <Route path="*" element={<Navigate to="/overview" />} />

        {/* 
          When the URL is exactly "/home", render the Home component.
          This displays the Home page when a user navigates to "/home".
        */}
        <Route path="/home" element={<Home />} />

        {/* 
          When the URL is exactly "/overview", render the Overview component.
          This displays the Overview page when a user navigates to "/overview".
        */}
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
// Exports the App component as the default export, 
// so it can be imported and rendered by index.js (or another entry point).
