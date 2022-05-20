require('dotenv').config();
const app = require('./app');

const { PORT } = process.env || 3001;

app.listen(PORT);
console.log(`API listening on ${PORT}`);
