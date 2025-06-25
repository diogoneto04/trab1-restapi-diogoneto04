const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar rotas
const alunoRoutes = require('./routes/alunoRoutes');
app.use('/alunos', alunoRoutes);

// Ligação MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Ligação à base de dados com sucesso!'))
  .catch(err => console.log('Erro na ligação à base de dados:', err));

module.exports = app;
