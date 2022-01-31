import React from 'react';

function Coin(coin) {
  const element = coin.coin;
  return (
    <div className="p-3 flex flex-col items-center">
      <h2>{element.symbol}</h2>
      <h3>{element.name}</h3>
      <p>
        $
        {element.price}
      </p>
    </div>
  );
}

export default Coin;
