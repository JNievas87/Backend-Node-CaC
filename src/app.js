import express from 'express';

import 'dotenv/config';
import peliculasRouter from './routes/peliculasRouter.js';
import directoresRouter from './routes/directoresRouter.js';
import generosRouter from './routes/generosRouter.js';
import usuariosRouter from './routes/usuariosRouter.js';

import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/peliculas', peliculasRouter);
app.use('/directores', directoresRouter);
app.use('/generos', generosRouter);
app.use('/usuarios', usuariosRouter);

export default app;
