import express, {Application} from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import cors from 'cors';

import sessionConfiguration from './session.config';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser(sessionConfiguration.secret));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, texttospeech',
  );
  next();
});

app.use(require('express-session')(sessionConfiguration));

export {app};
