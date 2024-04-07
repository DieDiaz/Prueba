import express from 'express'; 
import {port} from './config.js';

import indexRouts from './routes/index_routes.js';
import examenroutes from './routes/examen.routes.js';

const app = express();

app.use(express.json());

app.use(indexRouts);
app.use(examenroutes);

app.listen(port);
console.log(`Server is listening on port ${port}`);