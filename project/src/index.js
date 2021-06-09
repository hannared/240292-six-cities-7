import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import offerCards from './mocks/offer-cards';
import reviews from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} offerCards={offerCards} reviews={reviews} />
  </React.StrictMode>,
  document.getElementById('root'),
);
