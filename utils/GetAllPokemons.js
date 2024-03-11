import axios from 'axios';
import db from '../db/connection'

let listPokemons = [];

const getAllPokemons = async() => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0';
  let pokemons = [];
  await axios.get(url)
    .then(response => {
      pokemons = response.data.results;
    })
    .catch(error => {
      console.error(error);
    });
  return getAllPokemonsDetailed(pokemons);
}

const getAllPokemonsDetailed = async (pokemons) => {
  for (let pokemon of pokemons)
  {
    await axios.get(pokemon.url)
      .then(response => {
        let data =  {
          pokedexId: response.data.id,
          name: response.data.name, 
          type1: response.data.types[0]?.type.name ?? null, 
          type2: response.data.types[1]?.type.name ?? null, 
          imageDefault: response.data.sprites.other.home.front_default?? null, 
          imageDefaultShiny: response.data.sprites.other.home.front_shiny?? null,
          imageFemale: response.data.sprites.other.home.front_female?? null, 
          imageFemaleShiny: response.data.sprites.other.home.front_shiny_female?? null, 
          imageArtwork: response.data.sprites.other['official-artwork'].front_default?? null, 
          imageArtworkShiny: response.data.sprites.other['official-artwork'].front_shiny?? null,
          male: 0, 
          female: 0,
          createdAt: new Date().toJSON(),
          updatedAt: new Date().toJSON()
        };
        listPokemons.push(data);
        db.query(`
          INSERT INTO POKEMON (
            pokedexId,
            name, 
            type1, 
            type2, 
            imageDefault, 
            imageDefaultShiny, 
            imageFemale, 
            imageFemaleShiny, 
            imageArtwork, 
            imageArtworkShiny, 
            male, 
            female,
            createdAt,
            updatedAt
          )
          VALUES 
          (
            '${data.pokedexId}',
            '${data.name}',
            '${data.type1}',
            '${data.type2}',
            '${data.imageDefault}',
            '${data.imageDefaultShiny}',
            '${data.imageFemale}',
            '${data.imageFemaleShiny}',
            '${data.imageArtwork}',
            '${data.imageArtworkShiny}',
            '${data.male}',
            '${data.female}',
            '${data.createdAt}',
            '${data.updatedAt}' 
          );
        `);
      })
      .catch(error => {
        console.error(error);
      });
  }
  return listPokemons;
} 

export default getAllPokemons;