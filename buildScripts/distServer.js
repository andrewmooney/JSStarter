import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Fred", "lastName": "Flintstone", "email": "fred@example.com"},
    {"id": 2, "firstName": "Wilma", "lastName": "Flintstone", "email": "wilma@example.com"},
    {"id": 3, "firstName": "Bambam", "lastName": "Flintstone", "email": "bambam@example.com"}
  ]);
});

app.listen(port, (err) => err ? console.log(`An error occured: ${err}`) : open(`http://localhost:${port}`));
