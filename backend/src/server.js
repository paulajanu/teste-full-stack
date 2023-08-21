import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Escutando a porta ${process.env.PORT}`);
});

export default app;
