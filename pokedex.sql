-- Create DATABASE pokedex;
-- drop DATABASE pokedex;

use pokedex;

Create table pokemon (
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  name VARCHAR(100),
  type1 VARCHAR(100),
  type2 VARCHAR(100),
  imageDefault VARCHAR(250),
  imageDefaultShiny VARCHAR(250),
  imageFemale VARCHAR(250),
  imageFemaleShiny VARCHAR(250),
  imageArtwork VARCHAR(250),
  imageArtworkShiny VARCHAR(250),
  male bit, -- 1 true, 0 false
  female bit -- 1 true, 0 false
);

-- select * from pokemon;

-- insert into pokemon (name, type1, type2, imageDefault, imageDefaultShiny, imageFemale, imageFemaleShiny, imageArtwork, imageArtworkShiny, male, female)
-- values ('bulbasaur', 'grass', 'poison', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png', null, null, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png', 0, 0);

