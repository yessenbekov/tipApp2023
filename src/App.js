import "./App.css";
import { CalculatorMain } from "./components";
import { Logo } from "./images";
function App() {
  return (
    <div className="app">
      <header>
      <h1>
        <img
          src={Logo}
          alt="Splitter Tip Calculator App"
          className="logo"
        />
      </h1>
    </header>
      <CalculatorMain />
    </div>
  );
}

export default App;
