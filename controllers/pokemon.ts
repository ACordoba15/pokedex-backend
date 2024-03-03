import { Request, Response } from "express";
import Pokemon from "../models/pokemon";

export const GetPokemons = async (req: Request, res: Response) => {

  const pokemon = await Pokemon.findAll();
  res.json(pokemon);
}

export const GetPokemon = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: 'getPokemon',
    id
  });
}

export const PostPokemons = (req: Request, res: Response) => {
  const { body } = req;
  
  res.json({
    msg: 'postPokemons',
    body
  });
}

export const PutPokemons = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  
  res.json({
    msg: 'putPokemons',
    id
  });
}

export const DeletePokemons = (req: Request, res: Response) => {
  const { id } = req.params;
  
  res.json({
    msg: 'deletePokemons',
    id
  });
}