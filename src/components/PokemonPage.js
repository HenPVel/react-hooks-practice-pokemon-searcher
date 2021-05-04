import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])
  const [filterValue, setFilterValue] = useState("")

  function handleFilterChange(value) {
    setFilterValue(value)
    console.log(filterValue)
  }

  useEffect(fetchPokemon,[])

  function fetchPokemon() {
            fetch('http://localhost:3001/pokemon')
            .then(response => response.json())
            .then(databasePokemonArray => setPokemonArray(databasePokemonArray))
            
  }

  let filteredPokemonArray = pokemonArray.filter( pokemon => {
    if (filterValue !== "") {
      return pokemon.name.toLowerCase().includes(filterValue)
    } else {
      return pokemon
    }
  })
  
  function handleAddPokemon(newPokemon) {
    setPokemonArray([...pokemonArray, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon}/>
      <br />
      <Search handleFilterChange={handleFilterChange}/>
      <br />
      <PokemonCollection pokemonArray={filteredPokemonArray} />
    </Container>
  );
}

export default PokemonPage;
