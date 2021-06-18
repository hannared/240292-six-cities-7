import React from 'react';

function NearPropertyCard() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">{cards}</div>
    </section>
  );
}

export default NearPropertyCard;
