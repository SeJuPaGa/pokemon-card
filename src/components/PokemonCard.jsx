function PokemonCard({ pokemon }) {
  //on peut maintenant accéder aux propriétés passées à PokemonCard via props

  return (
    <figure>
      <figcaption> {pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}q
    </figure>
  );
}

export default PokemonCard;
