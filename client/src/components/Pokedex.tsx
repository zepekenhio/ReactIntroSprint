import React, { useEffect, useState } from "react";
import "../index.css"



const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <h2>Liste des Pokémons</h2>
      <ul className="pokemon-list">
      </ul>
    </div>
  );
};

export default Pokedex;
