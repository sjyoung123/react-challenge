const BASE_URL = "https://api.coinpaprika.com/v1";

export async function CoinsFetcher() {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}
