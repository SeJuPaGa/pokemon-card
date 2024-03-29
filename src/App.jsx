import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  //Fonction avec conditionnement pour aller à l'index précédent
  const handlePrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  //Fonction avc conditionnement pour aller à l'index suivant
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? (
        <button onClick={handlePrev}> precedent </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleNext}> suivant </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
