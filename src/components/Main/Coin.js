import React from 'react';
import { Link } from 'react-router-dom';

function Coin(coin) {
  const element = coin.coin; /*eslint-disable-line*/
  return (
    <div className="p-3 pt-8 pb-8 flex flex-col items-center border-2 odd:bg-white even:bg-slate-100">
      <h2>{element.symbol}</h2>
      <h3>{element.name}</h3>
      <p>
        $
        {element.price}
      </p>
      <Link to={`/details/${element.id}`}>
        Details
      </Link>
    </div>
  );
}

export default Coin;
