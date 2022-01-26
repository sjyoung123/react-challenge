import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Header from "../Components/Header";

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
const Body = styled.div`
  width: 100%;
`;

interface ILocation {
  state: {
    name: string | null;
  };
}

export default function Coin() {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation() as ILocation;

  return (
    <>
      <Container>
        <IconContainer>
          <FontAwesomeIcon onClick={() => navigate(-1)} icon={faHome} />
        </IconContainer>
        <Header title={state?.name || "Loading..."} />
        <Body></Body>
      </Container>
    </>
  );
}
