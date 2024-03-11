import axios from 'axios';
import db from '../db/connection'

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
          imageDefault: validateGenders(response.data.id) != 1 ? response.data.sprites.other.home.front_default : null, 
          imageDefaultShiny: validateGenders(response.data.id) != 1 ? response.data.sprites.other.home.front_shiny : null,
          imageFemale: (validateGenders(response.data.id) == 1 || validateGenders(response.data.id) == 3) ? response.data.sprites.other.home.front_female : null, 
          imageFemaleShiny: (validateGenders(response.data.id) == 1 || validateGenders(response.data.id) == 3) ? response.data.sprites.other.home.front_shiny_female : null, 
          imageArtwork: response.data.sprites.other['official-artwork'].front_default?? null, 
          imageArtworkShiny: response.data.sprites.other['official-artwork'].front_shiny?? null,
          male: validateGenders(response.data.id) != 1 ? 0 : 1, 
          female: validateGenders(response.data.id) != 0 ? 0 : 1,
          createdAt: new Date().toJSON(),
          updatedAt: new Date().toJSON()
        };

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

const validateGenders = (id) => {
  const maleList = [32, 33, 34, 236, 237, 106, 107, 128, 10250, 10251, 10252, 313, 381, 10063, 414, 475, 10068, 538, 539, 627, 628, 10240, 641, 10019, 642, 10020, 645, 10021, 859, 860, 861, 10272, 1014, 1015, 1016];
  const femaleList = [29, 30, 31, 440, 113, 242, 115, 10039, 238, 124, 241, 314, 380, 10062, 413, 10004, 10005, 416, 478, 488, 548, 549, 10237, 629, 630, 669, 670, 10061, 671, 758, 10129, 761, 762, 763, 856, 857, 858, 868, 869, 10223, 905, 10249, 957, 958, 959, 1017, 10273, 10274, 10275];
  const noGenderList = [];


  if (maleList.includes(id))
  {
    return 0;
  }
  
  else if (femaleList.includes(id))
  {
    return 1;
  }
  
  else if (noGenderList.includes(id))
  {
    return 2;
  }

  else {
    return 3;
  }
}

export default getAllPokemons;