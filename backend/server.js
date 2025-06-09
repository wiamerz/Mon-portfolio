/* const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./Routes/routes');

const app = express();

// ⚠️ IMPORTANT : Les middlewares de parsing DOIVENT être déclarés AVANT les routes
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes - APRÈS les middlewares de parsing
app.use('/api', contactRoutes); 

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🔥 MIDDLEWARE DANS LE BON ORDRE - CRITIQUE
console.log('Setting up middlewares...');

// 1. CORS en premier
app.use(cors({
   origin: ['http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));

// 2. Body parsing middlewares - TRÈS IMPORTANT
app.use(express.json({ 
  limit: '10mb',
  strict: false 
}));

app.use(express.urlencoded({ 
  extended: true, 
  limit: '10mb' 
}));

// 3. Middleware de debugging (temporaire)
app.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(`🔍 ${req.method} ${req.url}`);
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Body received:', req.body);
    console.log('Body type:', typeof req.body);
  }
  next();
});

// 4. MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(' MongoDB connection error:', err));

// 5. Routes - APRÈS tous les middlewares
const contactRoutes = require('./Routes/routes');
app.use('/api', contactRoutes);

// 6. Test route pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.json({ 
    message: 'Server is running!', 
    timestamp: new Date().toISOString() 
  });
});

// 7. Test route POST pour vérifier le parsing
app.post('/test', (req, res) => {
  res.json({
    message: 'Test route working',
    receivedBody: req.body,
    bodyType: typeof req.body,
    headers: req.headers
  });
});

// 8. 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    method: req.method,
    url: req.url
  });
});

// 9. Error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 10. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});