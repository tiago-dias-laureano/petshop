const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.json({
    message: 'Bem vindo ao meu canal',
    acao: 'Inscrevam-se'
  })
});

module.exports = route;