import express from 'express';
import expressSession from 'express-session';

const app = express();

const secret = process.env['SECRET'];

if (!secret) throw new Error('Missing ENV Secret');

app.use(
  expressSession({
    secret: secret,
  }),
);

app.get('/', (req, res) => {
  res.send('<h1>Hello Node Express</h1>');
});

console.log('Hello NodeJS', process.argv);

app.listen(8080, '0.0.0.0', () => {
  console.log(`Listening on http://0.0.0.0:8080/`);
});

// sourceMap + node --enable-source-maps
// throw new Error('Ups..') //  2_ts_node_project\src\index.ts:5:7)

// ;[].toReversed() // lib esnext

// Lib: []
// window.document.querySelector('div') // Error
