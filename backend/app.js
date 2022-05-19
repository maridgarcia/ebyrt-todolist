require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');

const { PORT } = process.env;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
