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

export async function CoinChartFetcher(id: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 14; //2주 동안의 코인 데이터
  return await (
    await fetch(
      `${BASE_URL}/coins/${id}/ohlcv/historical?start=${startDate}&end=${endDate}`
    )
  ).json();
}
