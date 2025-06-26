# Trabalho Prático #1

## Consumo e Implementação de APIs RESTful

### Objetivo Geral

Consolidar os conhecimentos em desenvolvimento web com foco na criação, consumo e implementação de APIs RESTful utilizando tecnologias do ecossistema JavaScript:

- Node.js + Express
- MongoDB / MongoDB Atlas
- JSON-Server
- Fetch API
- Swagger (opcional)

O projeto simula o ciclo completo de desenvolvimento de uma aplicação web com front-end e back-end separados, incluindo testes e deploy.

Dados do Aluno

- **Nome:** Diogo Neto  
- **Número:** 29510  
- **Curso:** Engenharia de Redes e Sistemas de Computadores  
- **Unidade Curricular:** Programação Web  

---

##  Deploy do Projeto

| Serviço                 | Link                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| **Frontend (Vercel)**   | 🌐 [https://trab1-restapi-diogoneto04.vercel.app](https://trab1-restapi-diogoneto04.vercel.app)     |
| **Backend (Render)**    | 🌐 [https://trab1-restapi-diogoneto04.onrender.com/alunos](https://trab1-restapi-diogoneto04.onrender.com/alunos) |
| **Documentação Swagger**| 📑 [https://trab1-restapi-diogoneto04.onrender.com/api-docs](https://trab1-restapi-diogoneto04.onrender.com/api-docs) |


## Organização do Projeto

```plaintext
projeto-raiz/
│
├── /frontend/        ← Interface web (HTML/CSS/JS)
├── /backend/         ← API RESTful com Node.js + MongoDB Atlas
│   ├── /models/      ← Modelos da base de dados (Mongoose)
│   ├── /routes/      ← Rotas da API
│   ├── /controllers/ ← Lógica dos endpoints
│   ├── /docs/        ← Documentação Swagger (Parte 6 - Bonificação)
│   └── app.js        ← Arquivo principal do backend
├── /mock-server/     ← API simulada com JSON-Server
├── /mock-data/       ← Base de dados JSON original (bd.json)
├── /tests/           ← Coleção de testes Postman
├── README.md         ← Instruções, links e documentação
└── .gitignore, etc.

---

## Partes do Trabalho

### Parte 1: Estruturação da Base de Dados (JSON)

- Criar um ficheiro `bd.json` com:

  - Lista de alunos: `nome`, `apelido`, `curso`, `anoCurricular`
  - Lista de cursos: `nomeDoCurso`

- 📁 Diretório sugerido: `/mock-data/`
- 📄 Entregável: `bd.json`

---

### Parte 2: API Simulada com JSON-Server + Testes

- Configurar e iniciar `json-server` com `bd.json`
- Testar os endpoints com Postman (CRUD de alunos, leitura de cursos)
- Exportar a coleção de testes

- 📁 Diretório sugerido: `/mock-server/`
- 📄 Entregáveis:
  - Código de configuração (`package.json`, script json-server)
  - Coleção `.json` do Postman em `/tests/`

---

### Parte 3: Interface Web (CRUD de Alunos)

- Desenvolver uma página web funcional para gerir alunos:
  - Ver alunos
  - Adicionar aluno
  - Editar aluno
  - Apagar aluno
- Utilizar `Fetch API` e programação assíncrona

- 📁 Diretório sugerido: `/frontend/`
- 📄 Entregável: Página funcional conectada à API simulada

---

### Parte 4: API RESTful real (Node.js + Express + MongoDB Atlas)

- Migrar os dados para o MongoDB Atlas
- Implementar a API Express com endpoints equivalentes ao JSON-server
- Manter a estrutura RESTful
- Sugestão : usar mongoose a abordagem MVC (bónus 5%)

- 📁 Diretório sugerido: `/backend/`
- 📄 Entregável: Código funcional da API com instruções

---

### Parte 5: Deploy da Aplicação

- Fazer deploy do front-end no [Vercel](https://vercel.com)
- (Opcional) Fazer deploy da API no [Render](https://render.com)
- Adaptar o front-end para consumir a nova API

📄 Incluir no `README.md`:

- URL pública do front-end
- URL da API real
- 📄 Entregável: Links funcionais no repositório

---

### Parte 6 (Bonificação): Documentação da API

- Utilizar Swagger para documentar os endpoints da API
- Incluir rota `/api-docs` na aplicação

- 📁 Diretório sugerido: `/backend/docs/`
- 📄 Entregável: Swagger funcional e acessível

---



## Sugestão de Branches

| Branch     | Descrição                        |
| ---------- | -------------------------------- |
| `main`     | Versão estável e final           |
| `dev`      | Desenvolvimento geral            |
| `frontend` | Interface e interação do usuário |
| `api`      | API real (Node + MongoDB)        |
| `deploy`   | Adaptações para Vercel/Render    |

---

## Critérios de Avaliação

| Critério                         | Peso |
| -------------------------------- | ---- |
| Base de dados JSON correta       | 10%  |
| API simulada e testada (Postman) | 10%  |
| Funcionalidade do front-end      | 30%  |
| Qualidade da API real (Node.js)  | 30%  |
| Integração front-end/backend     | 10%  |
| Deploy funcional                 | 10%  |
| Bonificação (MVC)                | +5%  |
| Bonificação (Swagger)            | +5%  |

---

## Entrega

- Entrega via **GitHub Classroom**.
- O repositório deve conter:
  - Código funcional
  - README.md com instruções claras
  - Links de deploy (front e opcionalmente back)

