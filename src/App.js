import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalContext from "./Context";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [galeria, setGaleria] = useState([])
  const GlobalState = {galeria, setGaleria}  

  useEffect(() => {
    mostrarGaleria();
  }, [])
  async function mostrarGaleria(){
  const endpoint = "/fotos.json";
  const response = await fetch(endpoint)
  const data = await response.json()
  setGaleria(data.photos)
  console.log(data.photos)
}

  return (
    <div className="App">
      <GlobalContext.Provider value = {GlobalState}>
        <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
      
    </div>
  );
}
