import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Main from '../components/Main/Main';
import Coin from '../components/Main/Coin';
import * as mainStore from '../redux/main'

describe('Renders components', () => {
  it('renders main component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    )
  })
  it('renders coin component', () => {
    const coin = {symbol: "BTC", name: "Bitcoin", price: "$38825.20"}
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Coin coin={coin}/>
        </Provider>
      </BrowserRouter>
    )
  })
});

describe('Test Redux Action', () => {
  it('fetches coin data', () => {
    const coin = {
      id: 90,
      name: "Bitcoin",
      rank: 1,
      price: 35555.82,
      symbol: "BTC",
      change24: 0.57,
      change7d: 5.23,};
    const action = mainStore.fetchCoins(coin);
    expect(action).toEqual({type: 'Cryptos/main/FETCH_COINS', payload: coin })
  })
})

