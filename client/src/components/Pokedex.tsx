import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css"

import type { Pokemon } from "../types";

const Pokedex: React.FC = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/pokemons`);
        setPokemons(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des Pokémons :", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h2>Liste des Pokémons</h2>
      <button onClick={() => navigate('/new-pokemon')}>Créer un nouveau Pokémon</button>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li key={pokemon._id} className="pokemon-list-item" onClick={() => navigate(`/pokemon/${pokemon._id}`)}>
            <p>#{pokemon.number}</p>
            {pokemon.imageUrl && <img src={pokemon.imageUrl} alt={pokemon.name} />}
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
