import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  color: ${(props) => props.theme.accentColor};
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 5px;
`;

interface ITitle {
  title?: string | null;
  src?: string | null;
}

export default function Header({ title, src }: ITitle) {
  return (
    <>
      <HeaderComponent>
        <Title>{title}</Title>
        {src && <Image src={src} alt="coin-icon" />}
      </HeaderComponent>
    </>
  );
}
