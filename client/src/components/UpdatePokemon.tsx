import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../index.css";
import type { Trainer, Zone, Pokemon } from "../types";


const UpdatePokemon: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
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
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch pokemon data
        const pokemonRes = await axios.get(`${import.meta.env.VITE_API_URL}/pokemons/${id}`);
        const pokemon = pokemonRes.data;

        // Populate form with existing data
        setFormData({
          number: pokemon.number.toString(),
          name: pokemon.name,
          types: pokemon.types.join(', '),
          imageUrl: pokemon.imageUrl || '',
          trainer: pokemon.trainer?._id || '',
          zone: pokemon.zone?.[0]?._id || ''
        });

        // Fetch trainers and zones
        const [trainersRes, zonesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/trainers`),
          axios.get(`${import.meta.env.VITE_API_URL}/zones`)
        ]);
        setTrainers(trainersRes.data);
        setZones(zonesRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);
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
      await axios.put(`${import.meta.env.VITE_API_URL}/pokemons/${id}`, pokemonData);
      navigate('/');
    } catch (error) {
      console.error("Erreur lors de la mise à jour du Pokémon :", error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pokemon-form">
      <h2>Update Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number">Number:</label>
          <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} placeholder="Number" required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div>
          <label htmlFor="types">Types:</label>
          <input type="text" id="types" name="types" value={formData.types} onChange={handleChange} placeholder="Types (comma separated)" required />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" />
        </div>
        <div>
          <label htmlFor="trainer">Trainer:</label>
          <select name="trainer" id="trainer" value={formData.trainer} onChange={handleChange} aria-label="Select Trainer">
            <option value="">Select Trainer</option>
            {trainers.map(trainer => (
              <option key={trainer._id} value={trainer._id}>{trainer.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="zone">Zone:</label>
          <select name="zone" id="zone" value={formData.zone} onChange={handleChange} aria-label="Select Zone">
            <option value="">Select Zone</option>
            {zones.map(zone => (
              <option key={zone._id} value={zone._id}>{zone.name} ({zone.region})</option>
            ))}
          </select>
        </div>
        <button type="submit">Update Pokémon</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdatePokemon;