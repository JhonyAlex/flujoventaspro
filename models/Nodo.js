
const mongoose = require('mongoose');

const NodoSchema = new mongoose.Schema({
  tipo: String,
  titulo: String,
  descripcion: String,
  responsableId: String,
  condiciones: Array,
  seguimiento: Object,
  relaciones: Array
});

module.exports = mongoose.model('Nodo', NodoSchema);
