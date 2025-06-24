const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/alunoController');

// Rotas para alunos
router.get('/', alunoCtrl.listar);           // Listar alunos
router.post('/', alunoCtrl.criar);           // Criar novo aluno
router.put('/:id', alunoCtrl.editar);        // Atualizar aluno (corrigido aqui!)
router.delete('/:id', alunoCtrl.apagar);     // Apagar aluno

module.exports = router;
