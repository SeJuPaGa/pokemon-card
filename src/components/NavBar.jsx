function NavBar({ pokemonList, onPokemonClick }) {
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.id}>
          onClick={() => onPokemonClick(pokemon.id)} {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
