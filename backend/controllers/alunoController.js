const Aluno = require('../models/Aluno');

exports.listar = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.criar = async (req, res) => {
  const novo = new Aluno(req.body);
  await novo.save();
  res.status(201).json(novo);
};

exports.apagar = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

exports.editar = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const alunoAtualizado = await Aluno.findByIdAndUpdate(id, dadosAtualizados, { new: true });

    if (!alunoAtualizado) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    res.json(alunoAtualizado);
  } catch (erro) {
    console.error('Erro no PUT /alunos/:id =>', erro);
    res.status(500).json({ erro: 'Erro ao editar aluno' });
  }
};
