/*const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];  // Bearer token

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado: Token requerido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Agrega info del usuario al request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};*/