// src/index.ts

import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/db';
import userRoutes from './routes/user.routes';
import { swaggerSpec, swaggerUi } from './config/swagger';
import { errorHandler } from './middlewares/errorHandler';
import { requestLogger } from './middlewares/logger.middleware';

dotenv.config();

const app = express();
app.use(express.json());
app.use(requestLogger);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/users', userRoutes);
import productRoutes from './routes/product.routes';

app.use('/api/products', productRoutes);

app.get('/', (_req, res) => res.send('API çalışıyor 🔥'));

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log('✅ DB bağlantısı başarılı');
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ DB bağlantı hatası:', err);
  });
