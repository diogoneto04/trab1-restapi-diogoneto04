const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/alunoController');

router.get('/', alunoCtrl.listar);
router.post('/', alunoCtrl.criar);
router.put('/:id', alunoCtrl.atualizar); // <- aqui tem que ser atualizar
router.delete('/:id', alunoCtrl.apagar);

module.exports = router;
