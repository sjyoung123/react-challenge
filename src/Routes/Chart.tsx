import { useQuery } from "react-query";
import { CoinChartFetcher } from "../api";
import Loading from "../Components/Loading";
import { ICoinId } from "../Components/Tab";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

interface IHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Chart({ coinId }: ICoinId) {
  const { isLoading, data: chartData } = useQuery<IHistory[]>(
    ["ohlcv", coinId],
    () => CoinChartFetcher(coinId),
    { refetchInterval: 10000 }
  );
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: coinId,
              data: chartData?.map((price) => {
                return {
                  x: new Date(price.time_close),
                  y: [
                    price.open.toFixed(2),
                    price.high.toFixed(2),
                    price.low.toFixed(2),
                    price.close.toFixed(2),
                  ],
                };
              }),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#3C90EB",
                  downward: "#DF7D46",
                },
              },
            },
            chart: {
              width: 700,
              height: "500px",
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              show: false,
            },
          }}
        />
      )}
    </>
  );
}
