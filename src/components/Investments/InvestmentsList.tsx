import { Investment } from "../model/Investment";
import { Flex } from "../shared/Flex";
import { InvestmentItem } from "./InvestmentItem/InvestmentItem";
import { InvestmentsHeader } from "./InvestmentsHeader";

type Prop = {
  investments: Investment[];
  addInvestment: () => void;
  removeInvestment: (i: number) => void;
  updateElement: (newWeight: number, i: number) => void;
};

export const InvestmentsList = ({
  investments,
  addInvestment,
  removeInvestment,
  updateElement
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
            updateElement={updateElement}
          />
        );
      })}
      <Flex>
        <button
          style={{
            marginRight: 0,
            marginLeft: "auto",
            border: "none",
            fontSize: "xx-large",
            fontWeight: "bolder",
            backgroundColor: "orange",
            color: "white",
            borderRadius: "20px",
            width: "20%",
          }}
          onClick={() => {
            addInvestment();
          }}
        >
          add
        </button>
      </Flex>
    </div>
  );
};
