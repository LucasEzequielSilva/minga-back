import 'dotenv/config.js'
import './config/database.js'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import { __dirname } from './utils.js';
const app = express();
import cors from 'cors'
import mercadopago from 'mercadopago';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';


//MERCADOPAGO

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((req, res, next) => {
  console.log("Petición solicitada!!")
  next()
})
//middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//middlewares error
app.use(notFound)
app.use(errorHandler)


export default app;
