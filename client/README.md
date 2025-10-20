# Poké-React 

Tu vas construire le **Front-end React** pour consommer l’API Pokémon. L’objectif est de rendre l’application interactive et de connecter tous les endpoints du backend.


### exercise 1 : Liste des Pokémon (Pokedex)

| Composant / Page | Objectif | Résultat attendu |
| :--------------- | :------- | :--------------- |
| `Pokedex.tsx` | Afficher tous les Pokémon | Liste de cartes Pokémon avec nom et image |
| | Interaction | Cliquer sur un Pokémon pour voir son détail |
| | Style | Grid responsive, cartes arrondies, effet hover |

### À faire :
- [ ] Ajouter l’état pour stocker les Pokémon
- [ ] Récupérer les Pokémon depuis l’API
- [ ] Afficher chaque Pokémon dans une carte
- [ ] Ajouter un événement de sélection sur chaque Pokémon
- [ ] Styliser les cartes (responsive + hover)

---

### exercise 2 : Détail d’un Pokémon

| Composant / Page | Objectif | Résultat attendu |
| :--------------- | :------- | :--------------- |
| `PokemonDetail.tsx` | Afficher les infos d’un Pokémon | Nom, numéro, types, image, trainer |
| | Interaction | Bouton “Retour” vers le Pokedex |
| | Style | Centrer le contenu, image large, info lisible |

### À faire :
- [ ] Récupérer l’ID du Pokémon sélectionné
- [ ] Afficher toutes les informations du Pokémon
- [ ] Ajouter un bouton retour
- [ ] Styliser la page de détail

---

### exercise 3 : Ajouter / Modifier / Supprimer Pokémon

| Composant / Page | Objectif | Résultat attendu |
| :--------------- | :------- | :--------------- |
| `PokemonForm.tsx` | Ajouter ou modifier un Pokémon | Formulaire complet avec name, number, types, image |
| | Interaction | Créer, modifier, supprimer un Pokémon |
| | Feedback | Messages de succès ou d’erreur après action |

### À faire :
- [ ] Créer le formulaire pour ajouter / modifier un Pokémon
- [ ] Connecter le formulaire aux endpoints POST et PUT
- [ ] Ajouter bouton pour supprimer un Pokémon
- [ ] Ajouter bouton pour supprimer tous les Pokémon
- [ ] Afficher messages de succès / erreur

---

### exercise 4 : Gestion des Dresseurs (Trainers)

| Composant / Page | Objectif | Résultat attendu |
| :--------------- | :------- | :--------------- |
| `Trainers.tsx` | Afficher tous les dresseurs | Liste de cartes dresseur avec leurs Pokémon |
| | Interaction | Ajouter un dresseur, ajouter un Pokémon à un dresseur |
| | Style | Cartes dresseur + liste Pokémon propre |

### À faire :
- [ ] Créer le composant `Trainers.tsx`
- [ ] Afficher tous les dresseurs
- [ ] Ajouter formulaire pour créer un dresseur
- [ ] Ajouter bouton pour assigner Pokémon à dresseur
- [ ] Afficher les Pokémon de chaque dresseur

---

### exercise 5 : Gestion des Zones

| Composant / Page | Objectif | Résultat attendu |
| :--------------- | :------- | :--------------- |
| `Zones.tsx` | Afficher toutes les zones | Liste de cartes zones avec Pokémon associés |
| | Interaction | Ajouter une zone, assigner Pokémon à une zone |
| | Style | Cartes zones + liste Pokémon claire |

### À faire :
- [ ] Créer le composant `Zones.tsx`
- [ ] Afficher toutes les zones
- [ ] Ajouter formulaire pour créer une zone
- [ ] Ajouter bouton pour assigner Pokémon à une zone
- [ ] Afficher les Pokémon de chaque zone

---

### exercise 6 : Authentification JWT

| Composant / Page | Objectif | Résultat attendu |
| :--------------- | :------- | :--------------- |
| `Login.tsx` / `Register.tsx` | Authentification utilisateur | Créer un compte et se connecter |
| | Interaction | Stocker le token JWT dans localStorage |
| | Sécurité | Protéger routes sensibles (POST, PUT, DELETE) |
| | Feedback | Messages d’erreur pour login / register |

### À faire :
- [ ] Créer composants Login et Register
- [ ] Connecter aux endpoints `/register` et `/login`
- [ ] Stocker le token JWT après login
- [ ] Protéger routes sensibles avec le token
- [ ] Afficher messages d’erreur / succès

---

### Bonus UI / UX

- [ ] Ajouter un header et menu de navigation : Pokémon | Trainers | Zones | Login/Register  
- [ ] Ajouter filtres Pokémon par type ou zone  
- [ ] Ajouter barre de recherche pour Pokémon par nom ou numéro  
- [ ] Ajouter animations CSS pour ouverture des cartes  
- [ ] Ajouter messages d’erreur et succès pour toutes les actions  
