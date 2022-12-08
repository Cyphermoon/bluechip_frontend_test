import DashBoard from "./components/DashBoard";
import Sidebar from "./components/Sidebar";
import { StyledContainer } from "./styles/container.style";

function App() {
  return (
    <StyledContainer>
      <Sidebar />
      <DashBoard />
    </StyledContainer>
  );
}

export default App;
