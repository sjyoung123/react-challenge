import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Overveiw from "../Components/Overview";

import Tab from "../Components/Tab";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0 20px;
  max-width: 300px;
  margin: 0 auto;
`;

const IconContainer = styled.div`
  svg {
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export default function Coin() {
  const { coinId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{coinId}</title>
      </Helmet>
      <Container>
        <IconContainer>
          <FontAwesomeIcon onClick={() => navigate("/")} icon={faHome} />
        </IconContainer>
        <Overveiw />
        <Tab coinId={coinId ? coinId : ""} />
      </Container>
    </>
  );
}
