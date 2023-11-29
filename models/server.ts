import express, { Application} from 'express';
import pokemonRoutes from '../routes/pokemon';
import cors from 'cors';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    pokemons: '/api/pokemons'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    
    // Metodos iniciales
    this.middlewares();
    this.routes();
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
    this.app.use(this.apiPaths.pokemons, pokemonRoutes)
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

export default Server;