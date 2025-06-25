const Aluno = require('../models/Aluno');

exports.listar = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.criar = async (req, res) => {
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.status(201).json(aluno);
};

exports.atualizar = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!aluno) {
      return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    res.json(aluno);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar aluno', erro });
  }
};

exports.apagar = async (req, res) => {
  const aluno = await Aluno.findByIdAndDelete(req.params.id);
  if (!aluno) {
    return res.status(404).json({ mensagem: 'Aluno não encontrado' });
  }
  res.json({ mensagem: 'Aluno apagado com sucesso' });
};