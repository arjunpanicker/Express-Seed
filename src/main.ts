import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { Routes } from  './routes';

const app: express.Express = express();

const router: express.Router = express.Router();

dotenv.load({ path: '.env' });
const port = process.env.SERVER_PORT || 4000;

app.use(express.static(path.join(__dirname, 'dist')));

Routes.ConfigureRoutes(router);

app.use('/', router);

app.get('/', function (request, response) {
    response.send('Welcome to Express');
}).listen(port);

console.log('Port: ', port);