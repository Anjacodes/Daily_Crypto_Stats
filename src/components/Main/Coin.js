import React from 'react';
import PropTypes from 'prop-types'; /*eslint-disable-line*/
import crypto from '../../assets/images/cryptoCoin.png';
import arrow from '../../assets/images/right-arrow.png';

function Coin({ coin }) {
  const { symbol, name, price } = coin;
  return (
    <div className="coin grid w-full p-3 pt-8 pb-8 items-center border-2">
      <img src={arrow} alt="right arrow icon" className="w-[15%] ml-auto" />
      <img src={crypto} alt="crypto coin icon" className="w-[35%] pl-4" />
      <h2 className="text-xl pr-4 font-bold">{symbol}</h2>
      <h3 className=" pr-4">{name}</h3>
      <p className=" pr-4">
        $
        {price}
      </p>
    </div>
  );
}

export default Coin;

Coin.propTypes = {
  coin: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
};

Coin.defaultProps = {
  coin: {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '$38825.20',
  },
};
