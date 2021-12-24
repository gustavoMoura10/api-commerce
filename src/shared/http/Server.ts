import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import routes from './routes/RoutesHandler';
const app = express();
app.use(cors());
app.use(express.json());
let PORT = process.env.PORT || 3333;

(async () => {
  try {
    app.use(routes)
    app.listen(PORT, () => console.log(`RUNNING ON PORT:${PORT}`));
  } catch (error) {
    app.use((req, resp, next) => {});
  }
})();
