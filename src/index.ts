import express from 'express';
import { config } from 'dotenv';

config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}: http://localhost:${PORT}`)
);
