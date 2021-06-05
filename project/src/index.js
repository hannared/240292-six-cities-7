import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const places = [
  { id: 1, title: 'test1' },
  { id: 2, title: 'test2' },
  { id: 3, title: 'test3' },
  { id: 4, title: 'test4' },
  { id: 5, title: 'test5' },
];

ReactDOM.render(
  <React.StrictMode>
    <App places={places} />
  </React.StrictMode>,
  document.getElementById('root'),
);
