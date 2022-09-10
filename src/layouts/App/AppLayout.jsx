import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "../../contexts";
import { Navbar } from "../../components";
import { PerfilProvider } from "../../contexts/Perfil/PerfilProvider";
import { GlobalStyle } from "../../themes";
import { Profiles } from "../../pages/Profiles";

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <main>
          <Profiles />
        </main>
      </PerfilProvider>
    </ThemeProvider>
  );
};
