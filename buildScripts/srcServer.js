import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Fred", "lastName": "Flintstone", "email": "fred@example.com"},
    {"id": 2, "firstName": "Wilma", "lastName": "Flintstone", "email": "wilma@example.com"},
    {"id": 3, "firstName": "Bambam", "lastName": "Flintstone", "email": "bambam@example.com"}
  ]);
});

app.listen(port, (err) => err ? console.log(`An error occured: ${err}`) : open(`http://localhost:${port}`));
