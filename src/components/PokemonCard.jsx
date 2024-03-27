function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[1];

  return (
    <figure>
      <figcaption> {pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
    </figure>
  );
}

export default PokemonCard;
