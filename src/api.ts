const BASE_URL = "https://api.coinpaprika.com/v1";

export async function CoinsFetcher() {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}

export async function CoinInfoFetcher(id: string | undefined) {
  return await (await fetch(`${BASE_URL}/coins/${id}`)).json();
}

export async function CoinPriceFetcher(id: string | undefined) {
  return await (await fetch(`${BASE_URL}/tickers/${id}`)).json();
}
