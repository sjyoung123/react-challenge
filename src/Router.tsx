import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./Routes/Coin";
import Coins from "./Routes/Coins";

export default function Router() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/:coinId/*" element={<Coin />}>
            {/* <Route path="price" element={<Price />} />
            <Route path="chart" element={<Chart />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
