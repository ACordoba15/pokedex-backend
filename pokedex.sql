-- Create DATABASE pokedex;

use pokedex;

Create table pokemon (
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  name VARCHAR(100),
  type1 VARCHAR(100),
  type2 VARCHAR(100),
  imageDefaut VARCHAR(250),
  imageDefautShiny VARCHAR(250),
  imageFemale VARCHAR(250),
  imageFemaleShiny VARCHAR(250),
  imageArtwork VARCHAR(250),
  imageArtworkShiny VARCHAR(250),
  male bit, -- 0 true, 1 false
  female bit -- 0 true, 1 false
);

-- select * from pokemon;

-- insert into pokemon (name, type1, type2, imageDefaut, imageDefautShiny, imageFemale, imageFemaleShiny, imageArtwork, imageArtworkShiny, male, female)
-- values ('bulbasaur', 'grass', 'poison', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png', null, null, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png', 0, 0);

