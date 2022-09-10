import { useCustomTheme } from "../../contexts";
import { Container, ContentTitle, Title } from "./Navbar.styled";
import { Button } from "../Button";

import logo from "../../assets/react.svg";

export const Navbar = () => {
  const { handleTheme } = useCustomTheme();

  return (
    <Container>
      <ContentTitle>
        <img src={logo} alt="Logo" />
        <Title>Perfils</Title>
      </ContentTitle>

      <Button onClick={handleTheme}>Alterar tema</Button>
    </Container>
  );
};
