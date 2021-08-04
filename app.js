const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Andy! This is a full pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
