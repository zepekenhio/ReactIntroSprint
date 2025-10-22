import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";
import type { Trainer, Zone } from "../types";

const NewPokemon: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    types: '',
    imageUrl: '',
    trainer: '',
    zone: ''
  });
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trainersRes, zonesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/trainers`),
          axios.get(`${import.meta.env.VITE_API_URL}/zones`)
        ]);
        setTrainers(trainersRes.data);
        setZones(zonesRes.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const typesArray = formData.types.split(',').map(type => type.trim());
      const pokemonData = {
        number: parseInt(formData.number),
        name: formData.name,
        types: typesArray,
        imageUrl: formData.imageUrl || undefined,
        trainer: formData.trainer || undefined,
        zone: formData.zone ? [formData.zone] : undefined
      };
      await axios.post(`${import.meta.env.VITE_API_URL}/pokemons`, pokemonData);
      navigate('/');
    } catch (error) {
      console.error("Erreur lors de la création du Pokémon :", error);
    }
  };

  return (
    <div className="pokemon-form">
      <h2>Créer un nouveau Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numéro:</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Entrez le numéro du Pokémon"
            required
          />
        </div>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez le nom du Pokémon"
            required
          />
        </div>
        <div>
          <label>Types (séparés par des virgules):</label>
          <input
            type="text"
            name="types"
            value={formData.types}
            onChange={handleChange}
            placeholder="Ex: Feu, Vol"
            required
          />
        </div>
        <div>
          <label>URL de l'image:</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.png"
          />
        </div>
        <div>
          <label>Dresseur:</label>
          <select
            name="trainer"
            value={formData.trainer}
            onChange={handleChange}
            aria-label="Sélectionner un dresseur"
          >
            <option value="">Sélectionner un dresseur</option>
            {trainers.map(trainer => (
              <option key={trainer._id} value={trainer._id}>
                {trainer.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Zone:</label>
          <select
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            aria-label="Sélectionner une zone"
          >
            <option value="">Sélectionner une zone</option>
            {zones.map(zone => (
              <option key={zone._id} value={zone._id}>
                {zone.name} ({zone.region})
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Créer Pokémon</button>
        <button type="button" onClick={() => navigate('/')}>Annuler</button>
      </form>
    </div>
  );
};

export default NewPokemon;
