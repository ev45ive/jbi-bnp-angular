/// <reference path="./types.d.ts" />

import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery'; // @types/jquery
import { updateTitle } from './lib.js';

console.log('Hello web!');

updateTitle('Hello TypeScript!');

console.log('React: ', React);

ReactDOM.createRoot(document.querySelector('.react')!).render(
  React.createElement('h3', { style: { color: 'red' } }, 'Hello from React'),
);

$('h1').css('color','hotpink')
$('.jquery').append($('<h3>Hello from jQuery</h3>')).css('color','blue')

