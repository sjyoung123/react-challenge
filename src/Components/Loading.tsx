import styled from "styled-components";

const LoadingState = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 38px;
`;

export default function Loading() {
  return (
    <>
      <LoadingState>Loading...</LoadingState>
    </>
  );
}
