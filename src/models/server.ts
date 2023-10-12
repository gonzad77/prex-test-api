import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

class Server {

  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.middlewares();
  }

  middlewares = () => {

    // CORS
    this.app.use( cors() );

    // Body parse
    this.app.use( express.json() );
  }

  listen = () => {
    this.app.listen( this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    })
  }
}

export default Server;