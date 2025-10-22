import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import { useParams, useNavigate } from "react-router-dom";
import type { Pokemon } from "../types";

const Pokedetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/pokemons/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du Pokémon :", error);
      }
    };

    if (id) {
      fetchPokemon();
    }
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <h2>Détails du Pokémon</h2>
      <div className="pokemon-detail">
        <div>
          <button onClick={() => navigate('/')}>Back to Pokedex</button>
        </div>
        {pokemon.imageUrl && <img src={pokemon.imageUrl} alt={pokemon.name} />}
        <h3>#{pokemon.number} - {pokemon.name}</h3>
        <p><strong>Types:</strong> {pokemon.types.join(', ')}</p>
        {pokemon.trainer && <p><strong>Trainer:</strong> {pokemon.trainer.name}</p>}
        {pokemon.zone && pokemon.zone.length > 0 && <p><strong>Zones:</strong> {pokemon.zone.map(z => z.name).join(', ')}</p>}
        <button onClick={() => navigate(`/update-pokemon/${pokemon._id}`)}>Update Pokémon</button>
      </div>
    </div>
  );
};

export default Pokedetails;
