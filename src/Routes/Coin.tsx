import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
      <IconContainer>
        <FontAwesomeIcon onClick={() => navigate(-1)} icon={faHome} />
      </IconContainer>
      <h1>{coinId}</h1>
    </>
  );
}
