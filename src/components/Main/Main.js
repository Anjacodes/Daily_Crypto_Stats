import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchCoinsFromAPI } from '../../redux/main';
import Coin from './Coin';

function Main() {
  const coins = useSelector((state) => state.main);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) dispatch(fetchCoinsFromAPI());
  }, []);

  const content = coins.map((coin) => (<Coin coin={coin} key={coin.id} />));
  return (
    <div>
      <div className="grid grid-cols-2 mt-6 grid-flow-row-dense">{content}</div>

      <Outlet />
    </div>
  );
}

export default Main;
