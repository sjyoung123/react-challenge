import { Link, Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import Chart from "../Routes/Chart";
import Price from "../Routes/Price";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const TabBtn = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 10px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

export interface ICoinId {
  coinId: string;
}

export default function Tab({ coinId }: ICoinId) {
  const priceMatch = useMatch("/:id/price");
  const chartMatch = useMatch("/:id/chart");

  return (
    <>
      <TabContainer>
        <TabBtn isActive={priceMatch !== null}>
          <Link to="price">Price</Link>
        </TabBtn>
        <TabBtn isActive={chartMatch !== null}>
          <Link to="chart">Chart</Link>
        </TabBtn>
      </TabContainer>
      <Routes>
        <Route path="price" element={<Price coinId={coinId} />} />
        <Route path="chart" element={<Chart coinId={coinId} />} />
      </Routes>
    </>
  );
}
