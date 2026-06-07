import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import partidaRoutes from './routes/partida.routes';
import resultadoRoutes from "./routes/resultado.routes";
import palabraRoutes from "./routes/palabra.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.use('/api/partidas', partidaRoutes);

app.use("/api", resultadoRoutes);

app.use("/api", palabraRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
  });
}

export default app;