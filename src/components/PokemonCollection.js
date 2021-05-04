import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonArray}) {
  let pokemonElements = pokemonArray.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon} />)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonElements}
    </Card.Group>
  );
}

export default PokemonCollection;
