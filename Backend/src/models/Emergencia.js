
const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  userId: { type: String, required: true },  // ID del usuario (del módulo login)
  type: { type: String, required: true },   // Ej: 'accidente', 'robo', 'médico'
  description: { type: String },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  priority: { type: String, default: 'media' },  // baja, media, alta (para IA después)
  status: { type: String, default: 'pendiente' },  // pendiente, en_progreso, resuelta
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Emergencia', emergencySchema);