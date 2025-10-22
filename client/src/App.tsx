import React from "react";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Pokedetails from "./components/Pokedetails";
import NewPokemon from "./components/NewPokemon";
import UpdatePokemon from "./components/UpdatePokemon";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Pokedetails />} />
        <Route path="/new-pokemon" element={<NewPokemon />} />
        <Route path="/update-pokemon/:id" element={<UpdatePokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App