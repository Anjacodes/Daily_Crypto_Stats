import axios from 'axios';

const FETCH_COINS = 'Cryptos/main/FETCH_COINS';
// const FILTER_COINS = 'Cryptos/main/FILTER_COINS';

// ACTIONS

export const fetchCoins = (payload) => ({
  type: FETCH_COINS,
  payload,
});

// export const filterCoins = (payload) => ({
//   type: FILTER_COINS,
//   payload,
// });

export const fetchCoinsFromAPI = () => (dispatch) => {
  axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100')
    .then((response) => {
      dispatch(fetchCoins(response.data.data));
    });
};

// REDUCER
const mainReducer = (state = [], action) => {
  const coinList = [...state];
  switch (action.type) {
    case FETCH_COINS: {
      const coins = [...action.payload];
      const filterCoins = coins.map((coin) => ({
        id: coin.id,
        name: coin.name,
        rank: coin.rank,
        price: coin.price_usd,
        symbol: coin.symbol,
        change24: coin.percent_change_24h,
        change7d: coin.percent_change_7d,
      }));
      return [...coinList, ...filterCoins];
    }
    // case FILTER_COINS: {
    //   if (action.payload.length > 0) {
    //     const match = coinList.filter((coin) => coin.name
    //       .toLowerCase()
    //       .startsWith(action.payload.toLowerCase()));
    //     return [...match];
    //   } return [...coinList];
    // }
    default:
      return state;
  }
};

export default mainReducer;
