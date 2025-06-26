const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestão de Alunos',
      version: '1.0.0',
      description: 'Documentação da API RESTful para gestão de alunos.',
    },
    servers: [
      {
        url: 'https://trab1-restapi-diogoneto04.onrender.com', // ✅ URL da tua API no Render
      },
    ],
  },
  apis: ['./routes/*.js'], // Caminho para os comentários nas tuas rotas
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;
