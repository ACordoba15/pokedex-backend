import axios from "axios";
import db from "../db/connection";

const getAllPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0";
  let pokemons = [];
  await axios
    .get(url)
    .then((response) => {
      pokemons = response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
  return getAllPokemonsDetailed(pokemons);
};

const getAllPokemonsDetailed = async (pokemons) => {
  for (let pokemon of pokemons) {
    await axios
      .get(pokemon.url)
      .then((response) => {
        let data = {
          pokedexId: response.data.id,
          name: response.data.name,
          type1: response.data.types[0]?.type.name ?? null,
          type2: response.data.types[1]?.type.name ?? null,
          imageDefault:
            validateGenders(response.data.id) != 1
              ? response.data.sprites.other.home.front_default
              : null,
          imageDefaultShiny:
            validateGenders(response.data.id) != 1
              ? response.data.sprites.other.home.front_shiny
              : null,
          imageFemale:
            validateGenders(response.data.id) == 1 ||
            validateGenders(response.data.id) == 3
              ? response.data.sprites.other.home.front_female
              : null,
          imageFemaleShiny:
            validateGenders(response.data.id) == 1 ||
            validateGenders(response.data.id) == 3
              ? response.data.sprites.other.home.front_shiny_female
              : null,
          imageArtwork:
            response.data.sprites.other["official-artwork"].front_default ??
            null,
          imageArtworkShiny:
            response.data.sprites.other["official-artwork"].front_shiny ?? null,
          male: validateGenders(response.data.id) != 1 ? 1 : 0,
          female: validateGenders(response.data.id) != 0 ? 1 : 0,
          createdAt: new Date().toJSON(),
          updatedAt: new Date().toJSON(),
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
      .catch((error) => {
        console.error(error);
      });
  }
};

const validateGenders = (id) => {
  const maleList = [
    32, 33, 34, 236, 237, 106, 107, 128, 10250, 10251, 10252, 313, 381, 10063,
    414, 475, 10068, 538, 539, 627, 628, 10240, 641, 10019, 642, 10020, 645,
    10021, 859, 860, 861, 10272, 1014, 1015, 1016
  ];
  const femaleList = [
    29, 30, 31, 440, 113, 242, 115, 10039, 238, 124, 241, 314, 380, 10062, 413,
    10004, 10005, 416, 478, 488, 548, 549, 10237, 629, 630, 669, 670, 10061,
    671, 758, 10129, 761, 762, 763, 856, 857, 858, 868, 869, 10223, 905, 10249,
    957, 958, 959, 1017, 10273, 10274, 10275
  ];
  const noGenderList = [
    81, 82, 462, 100, 1256, 101, 1257, 120, 121, 132, 137, 233, 474, 144, 1194,
    145, 1195, 146, 1196, 150, 151, 1068, 1069, 201, 243, 244, 245, 249, 250,
    251, 292, 337, 338, 343, 344, 374, 375, 376, 377, 378, 379, 382, 383, 384,
    385, 386, 486, 1026, 1027, 1028, 1101, 1102, 1103, 1104, 894, 895, 436, 437,
    479, 480, 481, 482, 483, 484, 487, 489, 490, 491, 492, 493, 494, 599, 600,
    601, 615, 622, 623, 638, 639, 640, 643, 644, 646, 647, 648, 649, 703, 716,
    717, 718, 719, 720, 721, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1043,
    1047, 1048, 1049, 1100, 1111, 1143, 1144, 1145, 1206, 1270, 1271, 773, 774,
    781, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798,
    799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 854, 855, 870, 880,
    881, 882, 883, 888, 889, 890, 893, 896, 897, 898, 924, 925, 999, 1000, 1001,
    1002, 1003, 1004, 1007, 1008, 1012, 1013, 1025, 1155, 1156, 1157, 1158,
    1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1172, 1180, 1181,
    1182, 1213, 1214, 1215, 1217, 1218, 1219, 1233, 1282, 1288, 1289, 1290,
    1291, 1292, 1293, 1294, 1295, 1296
  ];

  if (maleList.includes(id)) {
    return 0;
  } else if (femaleList.includes(id)) {
    return 1;
  } else if (noGenderList.includes(id)) {
    return 2;
  } else {
    return 3;
  }
};

export default getAllPokemons;
