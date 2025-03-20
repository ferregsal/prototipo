import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { products } from './products';

// Inicializamos la aplicación Express
const app = express();

// Configuramos los middlewares
app.use(bodyParser.json()); // Utilizamos bodyParser para procesar solicitudes en JSON
app.use(cors()); // Utilizamos Cors para gestionar solicitudes de otras aplicaciones
