import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO_URL || 'mongodb://localhost:27017/crud';

mongoose.connect(MONGO)
  .then(() => console.log('✅ DB conectada'))
  .catch(err => console.log('Error en DB:', err));

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
