import ImgLogo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={ImgLogo} alt="dt money" />
        
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}