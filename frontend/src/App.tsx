import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Button } from "./components/ui/button"
import { IoSearchOutline } from "react-icons/io5";
import { Home } from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
