import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CoinInfoFetcher, CoinPriceFetcher } from "../api";
import Loading from "./Loading";

const OverveiwContainer = styled.div`
  width: 100%;
`;

const OverviewItems = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OverviewItem = styled.span`
  font-size: 8px;
  width: 50%;
`;

const Description = styled.p`
  margin: 5px 0;
  font-size: 10px;
  padding: 5px;
  line-height: 15px;
`;

interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: Date;
  last_data_at: Date;
}

interface IPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: Date;
  last_updated: Date;
  quotes: Quotes;
}

interface Quotes {
  USD: Usd;
}

interface Usd {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: Date;
  percent_from_price_ath: number;
}

export default function Overveiw() {
  const { coinId } = useParams();
  const [startDate, setStartDate] = useState("");

  const { isLoading: infoLoading, data: infoData } = useQuery<IInfo>(
    ["info", coinId],
    () => CoinInfoFetcher(coinId)
  );

  const { isLoading: priceLoading, data: priceData } = useQuery<IPrice>(
    ["price", coinId],
    () => CoinPriceFetcher(coinId)
  );

  const loading = infoLoading || priceLoading;

  useEffect(() => {
    if (!loading && infoData) {
      setStartDate(() => {
        const date = new Date(infoData?.started_at);
        return date.toLocaleDateString();
      });
    }
  });

  return (
    <>
      <OverveiwContainer>
        {loading ? (
          <Loading />
        ) : (
          <>
            <OverviewItems>
              <OverviewItem>Rank: {infoData?.rank}</OverviewItem>
              <OverviewItem>Symbol: {infoData?.symbol}</OverviewItem>
              <OverviewItem>
                Price: ${priceData?.quotes.USD.price.toFixed(2)}
              </OverviewItem>
            </OverviewItems>
            <Description>{infoData?.description}</Description>
            <OverviewItems>
              <OverviewItem>
                Total Supply: {priceData?.total_supply}
                <br />
                Max Supply: {priceData?.max_supply}
              </OverviewItem>
              <OverviewItem>Started At: {startDate}</OverviewItem>
            </OverviewItems>
          </>
        )}
      </OverveiwContainer>
    </>
  );
}
