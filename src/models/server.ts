import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import filmsRoutes from '../routes/films';
import authRoutes from '../routes/auth';

import mongoose from 'mongoose';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    films: '/api/films',
    auth: '/api/auth',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await mongoose.connect('mongodb://localhost:27017/prex-test', {
        autoIndex: true,
        autoCreate: true,
      })
      console.log('Database connected');
    } catch (e) {
        throw (e instanceof Error) ? e : new Error('Error connecting to db');
    }

  }

  middlewares = () => {

    // CORS
    this.app.use( cors() );
    this.app.use( (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      next()
    })
    // Body parse
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.films, filmsRoutes )
    this.app.use( this.apiPaths.auth, authRoutes )
}

  listen = () => {
    this.app.listen( this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    })
  }
}

export default Server;