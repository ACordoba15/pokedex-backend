import express, { Application} from 'express';
import pokemonRoutes from '../routes/pokemon';
import cors from 'cors';
import db from '../db/connection';
import getAllPokemons from '../utils/GetAllPokemons';

class Server {
  private app: Application;
  private port: string;
  private database = 'pokedex';
  private apiPaths = {
    pokemonRoutes: '/api/pokemons'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    
    // Metodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      const result: any = await db.query("SELECT COUNT(*) AS 'ROWS' FROM pokemon;", {plain: true});
      const rows: number = result? result["ROWS"] : 0;
      console.log("results:", rows);
      console.log("DB Online");
      if (rows == 0)
      {
        // Se agregan los datos a la tabla.
        getAllPokemons();
        console.log("Data added to table successfully");
      }
    }
    catch (error:any) {
      throw new Error(error);
    }
  }


  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use( express.json());

    // Carpeta pública
    this.app.use( express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.pokemonRoutes, pokemonRoutes)
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

export default Server;