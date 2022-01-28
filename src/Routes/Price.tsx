import { useQuery } from "react-query";
import styled from "styled-components";
import { CoinPriceFetcher } from "../api";
import Loading from "../Components/Loading";
import { IPrice } from "../Components/Overview";
import { ICoinId } from "../Components/Tab";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-top: 10px;
  width: 100%;
`;

const TextContainer = styled.div`
  margin-bottom: 5px;
`;

const Tag = styled.span``;

const Text = styled.span<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? props.theme.accentColor : "red")};
`;

export default function Price({ coinId }: ICoinId) {
  const { isLoading, data: priceData } = useQuery<IPrice>(
    ["priceDetail", coinId],
    () => CoinPriceFetcher(coinId),
    {
      refetchInterval: 10000,
    }
  );

  const isPositive = (data: number | undefined) => {
    if (data && data >= 0) {
      return true;
    }
    if (!data) {
      return;
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <TextContainer>
            <Tag>Change Rate(30m): </Tag>
            <Text
              isPositive={
                isPositive(priceData?.quotes.USD.percent_change_30m) === true
              }
            >
              {priceData?.quotes.USD.percent_change_30m}%
            </Text>
          </TextContainer>
          <TextContainer>
            <Tag>Change Rate(1h): </Tag>
            <Text
              isPositive={
                isPositive(priceData?.quotes.USD.percent_change_1h) === true
              }
            >
              {priceData?.quotes.USD.percent_change_1h}%
            </Text>
          </TextContainer>
          <TextContainer>
            <Tag>Change Rate(6h): </Tag>
            <Text
              isPositive={
                isPositive(priceData?.quotes.USD.percent_change_6h) === true
              }
            >
              {priceData?.quotes.USD.percent_change_6h}%
            </Text>
          </TextContainer>
          <TextContainer>
            <Tag>Change Rate(12h): </Tag>
            <Text
              isPositive={
                isPositive(priceData?.quotes.USD.percent_change_12h) === true
              }
            >
              {priceData?.quotes.USD.percent_change_12h}%
            </Text>
          </TextContainer>
          <TextContainer>
            <Tag>Change Rate(1d): </Tag>
            <Text
              isPositive={
                isPositive(priceData?.quotes.USD.percent_change_24h) === true
              }
            >
              {priceData?.quotes.USD.percent_change_24h}%
            </Text>
          </TextContainer>
          <TextContainer>
            <Tag>Change Rate(7d): </Tag>
            <Text
              isPositive={
                isPositive(priceData?.quotes.USD.percent_change_7d) === true
              }
            >
              {priceData?.quotes.USD.percent_change_7d}%
            </Text>
          </TextContainer>
        </Container>
      )}
    </>
  );
}
