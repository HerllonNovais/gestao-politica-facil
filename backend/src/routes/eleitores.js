const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// Rota protegida de exemplo
router.get('/', auth, (req, res) => {
  res.json([{ nome: 'João', telefone: '11999999999' }]);
});

module.exports = router;
