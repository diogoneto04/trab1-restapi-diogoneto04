const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importar rotas
const alunoRoutes = require('./routes/alunoRoutes');
app.use('/alunos', alunoRoutes);

// Porta vinda do ambiente (Render define automaticamente)
const PORT = process.env.PORT || 3001;

// Validar se a URI está definida
if (!process.env.MONGODB_URI) {
  console.error('Erro: MONGODB_URI não está definida. Verifica o ficheiro .env ou as variáveis no Render.');
  process.exit(1); // Para o servidor
}

// Conectar à base de dados
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(' Ligado ao MongoDB com sucesso!');
  })
  .catch(err => {
    console.error(' Erro ao ligar ao MongoDB:', err);
  });

// Ouvir a porta (Render precisa disto fora do then)
app.listen(PORT, () => {
  console.log(` Servidor a correr na porta ${PORT}`);
});