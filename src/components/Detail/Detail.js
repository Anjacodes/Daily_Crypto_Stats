import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const coins = useSelector((state) => state.main);

  const params = useParams();
  const { id } = params;

  const coin = coins.filter((coin) => coin.id === id);

  //   const content = coins.map((coin) => <Link to="/detail" key={coin.id}>{coin.name}</Link>);
  return (
    <div>
      <h2>{coin[0].name}</h2>
      <p>
        Rank:
        {coin[0].rank}
      </p>
      <p>
        Price in USD: $
        {coin[0].price}
      </p>
      <p>
        Change in 24 hours: $
        {coin[0].change24}
      </p>
      <p>
        Change in 7 days: $
        {coin[0].change7d}
      </p>
    </div>
  );
};

export default Detail;
