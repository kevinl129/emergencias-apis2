const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Importar rutas y middleware
const emergencyRoutes = require('./controllers/emergenciaControlador');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());  // Configura según tus necesidades, ej. { origin: 'http://localhost:3000' }
app.use(express.json());  // Para parsear JSON en requests

// Conexión a MongoDB
/*mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
*/
// Rutas protegidas con JWT
//app.use('/api/emergencias', authMiddleware, emergencyRoutes);
app.use('/api/emergencias', emergencyRoutes);

// Ruta de prueba básica (sin auth)
app.get('/', (req, res) => {
  res.send('Backend de Emergencias y Seguridad - CityPass+');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});