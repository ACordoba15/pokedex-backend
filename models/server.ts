import express, { Application} from 'express';
import pokemonRoutes from '../routes/pokemon';
import cors from 'cors';
import db from '../db/connection';

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
      console.log("DB Online");
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