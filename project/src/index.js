import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import offerCards from './mocks/offer-cards';
import reviews from './mocks/reviews';

const places = [
  { id: 1, title: 'test1' },
  { id: 2, title: 'test2' },
  { id: 3, title: 'test3' },
  { id: 4, title: 'test4' },
  { id: 5, title: 'test5' },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      places={places}
      offers={offers}
      pofferCards={offerCards}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
