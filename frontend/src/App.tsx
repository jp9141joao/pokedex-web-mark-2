import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <Navigate to="/overview" /> } />
        <Route path="/home" element={ <Home /> }/>
        <Route path="/overview" element={ <Overview /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
