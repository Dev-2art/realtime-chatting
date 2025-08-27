import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connection from './utils/connection';

async function main() {
  try {
    config();
    const db = await connection();
    console.log('Connection to database:', db);
    const app = express();
    const PORT = process.env.PORT;

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
      res.status(200).send('Heloo');
    });

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}: http://localhost:${PORT}`)
    );
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err.message);
  }
}

main();
