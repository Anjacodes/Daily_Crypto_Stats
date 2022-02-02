import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import crypto from '../../assets/images/cryptoCoin.png';

const Detail = () => {
  const coins = useSelector((state) => state.main);

  const params = useParams();
  const { id } = params;

  const coin = coins.filter((coin) => coin.id === id);

  //   const content = coins.map((coin) => <Link to="/detail" key={coin.id}>{coin.name}</Link>);
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="flex py-10 items-center pl-[20%]">
        <img className="w-[25%] pr-5" src={crypto} alt="crypto coin icon" />
        <h2 className="text-[2rem] font-extrabold">{coin[0].name}</h2>
      </div>
      <ul className="w-[100vw] text-center">
        <li className="flex justify-between text-[1.5em] li py-3 px-[20%]">
          <h2>Symbol: </h2>
          <p>{coin[0].symbol}</p>
        </li>
        <li className="flex justify-between text-[1.5em] li py-3 px-[20%]">
          <h2>Rank: </h2>
          <p>{coin[0].rank}</p>
        </li>
        <li className="flex justify-between text-[1.5em] li py-3 px-[20%]">
          <h2>Price USD: </h2>
          <p>
            $
            {coin[0].price}
          </p>
        </li>
        <li className="flex justify-between px-[20%] text-[1.5em] li py-3">
          <h2>Change in 24 hours: </h2>
          <p>
            {' '}
            $
            {coin[0].change24}
          </p>
        </li>
        <li className="flex justify-between px-[20%] text-[1.5em] li py-3">
          <h2>Change in 7 days: </h2>
          <p>
            $
            {coin[0].change7d}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Detail;
