import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import partidaRoutes from './routes/partida.routes';

const app = express();

app.use(cors());
app.use(express.json());

// 🔐 auth
app.use('/api', authRoutes);

// 🎮 partidas
app.use('/api/partidas', partidaRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});