import { CustomThemeProvider } from "./contexts";
import { AppLayout } from "./layouts";

function App() {
  return (
    <CustomThemeProvider>
      <AppLayout />
    </CustomThemeProvider>
  );
}

export default App;
