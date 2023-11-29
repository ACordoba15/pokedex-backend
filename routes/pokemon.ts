import { Router } from 'express';
import { DeletePokemons, GetPokemon, GetPokemons, PostPokemons, PutPokemons } from '../controllers/pokemon';

const router = Router();
// Se definen las rutas y se asocian con el controlador
router.get('/',       GetPokemons);
router.get('/:id',    GetPokemon);
router.post('/',      PostPokemons);
router.put('/:id',    PutPokemons);
router.delete('/:id', DeletePokemons);

export default router;