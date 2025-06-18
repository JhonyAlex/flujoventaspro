
const express = require('express');
const router = express.Router();
const Flujo = require('../models/Flujo');

router.post('/', async (req, res) => {
  try {
    const flujo = await Flujo.create(req.body);
    res.status(201).json(flujo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const flujo = await Flujo.findById(req.params.id);
    if (!flujo) return res.status(404).json({ error: 'Flujo no encontrado' });
    res.json(flujo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const flujo = await Flujo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flujo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const flujos = await Flujo.find();
    res.json(flujos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
