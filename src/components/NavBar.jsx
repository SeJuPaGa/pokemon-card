function NavBar(props) {
  const { pokemonIndex, pokemonList, handlePrev, handleNext } = props;
  return (
    <>
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
    </>
  );
}

export default NavBar;
