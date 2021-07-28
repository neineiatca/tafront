import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { InvestmentsList } from "./components/Investments/InvestmentsList";
import { Summary } from "./components/Summary";

function App() {
  const [investments, setInvestments] = useState([
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
  ]);

  const addInvestment = () => {
    let tmpInvestments = JSON.parse(JSON.stringify(investments));
    tmpInvestments.push(tmpInvestments[tmpInvestments.length - 1]);
    setInvestments(tmpInvestments);
  };

  const removeInvestment = (i: number) => {
    let tmpInvestments = JSON.parse(JSON.stringify(investments));
    tmpInvestments.splice(i, 1);
    setInvestments(tmpInvestments);
  };

  const updateElement = (newWeight: number, i: number) => {
    let tmpInvestments = JSON.parse(JSON.stringify(investments));
    tmpInvestments[i].weight = newWeight;
    setInvestments(tmpInvestments);
  };

  return (
    <div style={{ width: "1300px", marginLeft: "auto", marginRight: "auto" }}>
      <Header style={{ height: "10vh" }} />
      <Summary
        style={{ height: "10vh" }}
        value={Math.round(
          investments.reduce((acc, currentObj) => {
            return {
              ...acc,
              weight: acc.weight + currentObj.weight,
            };
          }).weight / investments.length
        )}
      />
      <InvestmentsList
        investments={investments}
        addInvestment={addInvestment}
        removeInvestment={removeInvestment}
        updateElement={updateElement}
      />
    </div>
  );
}

export default App;
