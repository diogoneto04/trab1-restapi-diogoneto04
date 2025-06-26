const swaggerDocs = require('./docs/swagger');
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

// Swagger (vem depois das rotas para documentar)
swaggerDocs(app);

// Ligação MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Ligação à base de dados com sucesso!'))
  .catch(err => console.log('Erro na ligação à base de dados:', err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
