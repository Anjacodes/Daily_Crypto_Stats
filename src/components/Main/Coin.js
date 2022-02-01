import React from 'react';
import PropTypes from 'prop-types'; /*eslint-disable-line*/

function Coin({ coin }) {
  const { symbol, name, price } = coin;
  return (
    <div className="p-3 pt-8 pb-8 flex flex-col items-center border-2 odd:bg-white even:bg-slate-100">
      <h2>{symbol}</h2>
      <h3>{name}</h3>
      <p>
        $
        {price}
      </p>
    </div>
  );
}

export default Coin;

Coin.propTypes = {
  coin: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};

Coin.defaultProps = {
  coin: {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '$38825.20',
  },
};
