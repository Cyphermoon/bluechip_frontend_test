import { useState } from "react";
import DashBoard from "./components/DashBoard";
import Sidebar from "./components/Sidebar";
import { StyledContainer } from "./styles/container.style";

function App() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <StyledContainer className={`${navOpened ? "disable-scrolling" : ""}`}>
      <Sidebar
        navOpened={navOpened}
        setNavOpened={setNavOpened} />
      <DashBoard />
    </StyledContainer>
  );
}

export default App;
