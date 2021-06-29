import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 500;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Runninng on port: http://localhost:${PORT}`));