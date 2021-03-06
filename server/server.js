'use strict';

const express = require('express');
const path = require('path');
const http = require('http');

const api = require('./routes/api');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/', api);

app.get('/src/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', req.url));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
