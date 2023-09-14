import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<Tour/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
