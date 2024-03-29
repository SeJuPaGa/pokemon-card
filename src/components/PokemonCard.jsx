import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  //on peut maintenant accéder aux propriétés passées à PokemonCard via props
  return (
    <figure>
      <figcaption> {pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
