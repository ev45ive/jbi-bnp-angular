import assert from 'assert';
import express from 'express';
import expressSession from 'express-session';
import { mockPlaylists } from './model/mockPlaylists';

const app = express();

// if (!process.env['SECRET']) throw new Error('Missing ENV Secret');
assert(process.env['SECRET'], 'Missing ENV Secret'); // type guard / assertion

const PORT = Number(process.env['PORT']) || 8080;
const HOST = process.env['HOST'] || 'localhost';

const session = expressSession({
  secret: process.env['SECRET'],
  resave: false,
  saveUninitialized: false,
});

app.use(session);

app.get('/playlists', (req, res) => {
  const name = req.query['name'];
  const description = req.query['description'];
  
  res.send(
    mockPlaylists.filter((p) => {
      p.name.includes(name);
      p.name.includes(description);
    }),
  );

});

app.get('/', (req, res) => {
  res.send('<h1>Hello Node Express</h1>');
});

console.log('Hello NodeJS', process.argv.slice(2));

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}/`);
});

// sourceMap + node --enable-source-maps
// throw new Error('Ups..') //  2_ts_node_project\src\index.ts:5:7)

// ;[].toReversed() // lib esnext

// Lib: []
// window.document.querySelector('div') // Error
