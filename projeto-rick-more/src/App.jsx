import Personagens from "./components/Personagens/Personagens";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./components/Header/header-styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Personagens />
    </>
  );
}

export default App;
