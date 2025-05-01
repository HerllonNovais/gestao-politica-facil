const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { email, password } = req.body;
  // Simples validação fictícia
  if (email === 'admin@sistema.com' && password === 'admin') {
    const token = jwt.sign({ user: email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Credenciais inválidas' });
};

module.exports = { login };
