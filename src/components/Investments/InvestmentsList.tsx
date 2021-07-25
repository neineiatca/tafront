import { Investment } from "../model/Investment";
import { InvestmentItem } from "./InvestmentItem/InvestmentItem";
import { InvestmentsHeader } from "./InvestmentsHeader";

type Prop = {
  investments: Investment[];
};

export const InvestmentsList = ({ investments }: Prop) => {
  return (
    <div>
      <InvestmentsHeader style={{ height: "10vh" }} />
      {investments.map((e) => {
        return <InvestmentItem investment={e} style={{ height: "10vh" }} />;
      })}
    </div>
  );
};
