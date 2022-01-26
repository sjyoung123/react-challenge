import styled from "styled-components";

const HeaderComponent = styled.header`
  margin-bottom: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  color: ${(props) => props.theme.accentColor};
`;

interface ITitle {
  title: string;
}

export default function Header({ title }: ITitle) {
  return (
    <>
      <HeaderComponent>
        <Title>{title}</Title>
      </HeaderComponent>
    </>
  );
}
