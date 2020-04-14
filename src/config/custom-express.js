const express = require('express');

const rotas = require('../app/rotas/rotas.js');

const app = express();

rotas(app);

module.exports = app;