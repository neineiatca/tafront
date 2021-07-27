import { Investment } from "../model/Investment";
import { InvestmentItem } from "./InvestmentItem/InvestmentItem";
import { InvestmentsHeader } from "./InvestmentsHeader";

type Prop = {
  investments: Investment[];

  addInvestment: () => void;
  removeInvestment: (i: number) => void;
};

export const InvestmentsList = ({
  investments,
  addInvestment,
  removeInvestment,
}: Prop) => {
  return (
    <div>
      <InvestmentsHeader style={{ height: "10vh" }} />
      {investments.map((e, index) => {
        return (
          <InvestmentItem
            investment={e}
            style={{ height: "10vh" }}
            removeInvestment={removeInvestment}
            index={index}
          />
        );
      })}
      <button
        onClick={() => {
          addInvestment();
        }}
      >
        add
      </button>
    </div>
  );
};
