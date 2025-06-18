
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  role: { type: String, enum: ['admin', 'cliente', 'operador'], default: 'cliente' },
  empresaId: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
