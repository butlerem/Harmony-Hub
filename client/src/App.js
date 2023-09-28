import logo from "./logo.svg";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu"; // Corrected path
import { MainContainer } from "./Components/MainContainer"; // Corrected path
import { RightMenu } from "./Components/RightMenu"; // Corrected path

function App() {
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;
