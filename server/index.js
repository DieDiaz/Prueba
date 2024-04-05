import express from 'express'; 
import {port} from './config.js';
import indexRouts from './routes/index_routes.js';

const app = express();

app.use(indexRouts)

app.listen(port)
console.log(`Server is listening on port ${port}`);