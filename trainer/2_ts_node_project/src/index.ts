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
app.use((req, res, next) => {
  req.user = { name: 'Admin' };
});

app.get('/user', (req, res) => {
  res.send(req.user);
});

app.get('/playlists/:id', (req, res) => {

  req.session.views // From SessionData Merged Declaration!

  const found = mockPlaylists.find((p) => p.id == req.params['id']);
  if (!found) {
    return res.status(404).send({ message: 'Playlist not found' });
  }

  return res.send(found);
});

// http://localhost:8080/playlists ? name = 123 & description = 123
app.get('/playlists', (req, res) => {
  const { name = '', description = '' } = req.query;

  const str_name = typeof name === 'string' ? name : '';
  const str_description = typeof description === 'string' ? description : '';

  res.send(
    mockPlaylists.filter(
      (p) =>
        p.name.includes(str_name) && p.description.includes(str_description),
    ),
  );

  // if (name) name;
  // if (typeof name === 'string') name;
  // if (name && !Array.isArray(name)) name;
  // const strName = String(name);
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

 