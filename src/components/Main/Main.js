import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { fetchCoinsFromAPI } from '../../redux/main';
import Coin from './Coin';
import crypto from '../../assets/images/cryptocurrency.png';

function Main() {
  const coins = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const [coinCount, setCoinCount] = useState('');
  const [activeMarkets, setActiveMarkets] = useState('');
  const [totalVolume, setTotalVolume] = useState('');

  const displayGlobalCoins = () => {
    axios.get('https://api.coinlore.net/api/global/')
      .then((response) => {
        setCoinCount(`${response.data[0].coins_count}`);
        setActiveMarkets(`${response.data[0].active_markets}`);
        setTotalVolume(`$${response.data[0].total_volume}`);
      });
  };

  useEffect(() => {
    if (coins.length === 0) { dispatch(fetchCoinsFromAPI()); }
    displayGlobalCoins();
  }, []);

  const content = coins.filter((coin) => { /*eslint-disable-line*/
    if (searchTerm === '') {
      return coin;
    } if (coin.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return coin;
    }
  }).map((coin) => (<Link to={`/details/${coin.id}`} key={coin.id}><Coin coin={coin} /></Link>));

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="m:flex-row m:flex m:items-center m:py-6">
        <img className="w-[85vw] m:w-[50vw] l:w-[40vw] xl:w-[20vw]" src={crypto} alt="crypto coins" />
        <div className="flex flex-col items-center py-10 m:items-start m:pl-5">
          <h2 className="text-2xl">
            Total Coin Count:
            {' '}
            {coinCount}
          </h2>
          <p className="text-2xl">
            Active Markets:
            {' '}
            {activeMarkets}
          </p>
          <p className="text-2xl">
            Total Volume:
            {' '}
            {totalVolume}
          </p>
        </div>
      </div>
      <input onChange={((event) => setSearchTerm(event.currentTarget.value))} className="w-[100vw] pl-5 py-3 text-black" type="text" placeholder="Filter Coins by Name" />

      <div className="grid w-[100vw] xs:grid-cols-2 m:grid-cols-4 l:grid-cols-6 text-right">{content}</div>

      <Outlet />
    </div>
  );
}

export default Main;
