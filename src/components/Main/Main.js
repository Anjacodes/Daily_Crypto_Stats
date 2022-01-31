import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinsFromAPI } from '../../redux/main';
import Coin from './Coin';

function Main() {
  const coins = useSelector((state) => state.main);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinsFromAPI());
  }, []);

  const content = coins.map((coin) => (<Coin coin={coin} key={coin.id} />));
  return <div className="grid grid-cols-3 mt-6 gap-4">{content}</div>;
}

export default Main;
