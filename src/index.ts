import path = require('node:path');
import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes';

// CONEXÃO COM O BANDO DE DADOS MONGODB
mongoose.connect('mongodb://localhost:27017')
  // A API SÓ VAI RODAR SE A CONEXÃO COM O DB FOR EXECUTADA COM SUCESSO
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on port http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));





