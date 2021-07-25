import "./App.css";
import { Header } from "./components/Header";
import { InvestmentsList } from "./components/Investments/InvestmentsList";
import { Summary } from "./components/Summary";

function App() {
  return (
    <div style={{ width: "1300px", marginLeft: "auto", marginRight: "auto" }}>
      <Header style={{ height: "10vh" }} />
      <Summary style={{ height: "10vh" }} />
      <InvestmentsList
        investments={[
          {
            name: "Fidelity International Index",
            assetClass: "International Funds",
            weight: 10,
          },
          {
            name: "Fidelity Small Cap Index",
            assetClass: "Small Cap Funds",
            weight: 25,
          },
          {
            name: "Fidelity Mid Cap Index",
            assetClass: "Mid Cap Funds",
            weight: 50,
          },
          {
            name: "Fidelity 500 Index",
            assetClass: "Large Cap Funds",
            weight: 75,
          },
          {
            name: "Fidelity US Bond Index",
            assetClass: "Bond Funds",
            weight: 90,
          },
        ]}
      />
    </div>
  );
}

export default App;
