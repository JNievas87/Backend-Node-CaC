import 'dotenv/config';

import app from './src/app.js';

import cors from 'cors';
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor conectado a PORT:${PORT}`));
