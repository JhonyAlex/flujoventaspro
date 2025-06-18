
const mongoose = require('mongoose');

const FlujoSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  empresa: String,
  nodos: Array,
  relaciones: Array
}, { timestamps: true });

module.exports = mongoose.model('Flujo', FlujoSchema);
