const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/alunoController');

router.get('/', alunoCtrl.listar);
router.post('/', alunoCtrl.criar);
router.put('/:id', alunoCtrl.atualizar); // <- aqui tem que ser atualizar
router.delete('/:id', alunoCtrl.apagar);

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     responses:
 *       200:
 *         description: Lista de alunos
 */
router.get('/', alunoCtrl.listar);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               apelido:
 *                 type: string
 *               curso:
 *                 type: string
 *               anoCurricular:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Aluno criado
 */
router.post('/', alunoCtrl.criar);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               apelido:
 *                 type: string
 *               curso:
 *                 type: string
 *               anoCurricular:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Aluno atualizado
 */
router.put('/:id', alunoCtrl.atualizar);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Apaga um aluno
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Aluno apagado
 */
router.delete('/:id', alunoCtrl.apagar);

module.exports = router;
