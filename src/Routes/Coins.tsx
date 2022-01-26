import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CoinsFetcher } from "../api";
import Header from "../Components/Header";
import Loading from "../Components/Loading";

const Container = styled.div`
  padding: 0 20px;
  max-width: 300px;
  margin: 0 auto;
`;

// const Header = styled.header``;

// const Title = styled.h1`
//   text-align: center;
//   margin-bottom: 15px;
// `;

const CoinsList = styled.ul`
  max-width: 300px;
  height: 80vh;
  overflow-y: scroll;
  --ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  border: 0.5px solid;
  border-color: ${(props) => props.theme.textColor};
  padding: 15px;
`;

const Coin = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 0.1px solid;
  padding: 2px;
  :hover {
    span {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
  height: 35px;
  width: 35px;
`;

interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const { isLoading, data } = useQuery<ICoins[]>("allCoins", CoinsFetcher);
  return (
    <>
      <Container>
        <Header title="코인: 50" />
        <CoinsList>
          {isLoading ? (
            <Loading />
          ) : (
            data?.slice(0, 50).map((data) => (
              <Link key={data.id} to={data.id} state={{ name: data.name }}>
                <Coin key={data.id}>
                  <span>{data.name}</span>
                  <Img
                    src={`https://cryptoicon-api.vercel.app/api/icon/${data.symbol.toLowerCase()}`}
                    alt="coin-image"
                  />
                </Coin>
              </Link>
            ))
          )}
        </CoinsList>
      </Container>
    </>
  );
}
