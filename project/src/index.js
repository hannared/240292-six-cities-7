import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const places = [
  { title: 'test1' },
  { title: 'test2' },
  { title: 'test3' },
  { title: 'test4' },
  { title: 'test5' },
];

ReactDOM.render(
  <React.StrictMode>
    <App places={places} />
  </React.StrictMode>,
  document.getElementById('root'),
);
