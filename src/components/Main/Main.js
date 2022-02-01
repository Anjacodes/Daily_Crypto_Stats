import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { fetchCoinsFromAPI } from '../../redux/main';
import Coin from './Coin';

function Main() {
  const coins = useSelector((state) => state.main);
  const dispatch = useDispatch();

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

  const content = coins.map((coin) => (<Link to={`/details/${coin.id}`} key={coin.id}><Coin coin={coin} /></Link>));
  return (
    <div>
      <div>
        <h2>
          Total Coin Count:
          {coinCount}
        </h2>
        <p>
          Active Markets:
          {activeMarkets}
        </p>
        <p>
          Total Volume:
          {totalVolume}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-6 grid-flow-row-dense">{content}</div>

      <Outlet />
    </div>
  );
}

export default Main;
