
const express = require('express');
const Emergencia = require('../models/Emergencia');
const { publishEvent } = require('../events/eventoPublicador');

const router = express.Router();

let emergencies = [];

// POST: Crear una emergencia (botón de pánico)
router.post('/', async (req, res) => {
  try {
    const { userId, type, description, location } = req.body;
    
    // Validación básica
    if (!userId || !type || !location.lat || !location.lng) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    //const newEmergency = new Emergencia({ userId, type, description, location });
    //await newEmergency.save();

    // Crear emergencia hardcodeada
    const newEmergency = {
      id: Date.now().toString(), // ID temporal
      userId,
      type,
      description,
      location,
      priority: 'media', // Valor por defecto
      status: 'pendiente',
      createdAt: new Date()
    };
    emergencies.push(newEmergency);

    await publishEvent('emergencia.creada', {
      id: newEmergency.id,
      type: newEmergency.type,
      location: newEmergency.location,
      timestamp: newEmergency.createdAt
    });

    // Publicar evento en EDA (para que otros módulos lo consuman)
    /*await publishEvent('emergencia.creada', {
      id: newEmergency._id,
      type: newEmergency.type,
      location: newEmergency.location,
      timestamp: newEmergency.createdAt
    });*/

    res.status(201).json({ message: 'Emergencia creada', data: newEmergency });
  } catch (error) {
    console.error('Error al crear emergencia:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

// GET: Listar emergencias (para testing)
router.get('/', async (req, res) => {
  try {
    const emergencies = await Emergencia.find();
    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar emergencias' });
  }
});

module.exports = router;