import { Flex } from "../../shared/Flex";
import DiscreteSlider from "./DiscreteSlider";
import { PercentageBar } from "../../shared/PercentageBar";
import { Investment } from "../../model/Investment";

type Props = {
  investment: Investment;
  style?: React.CSSProperties;
};

export const InvestmentItem = ({ investment, style }: Props) => {
  return (
    <Flex style={style}>
      <div style={{ width: "20%", textAlign: "center" }}>x</div>
      <div style={{ width: "20%", textAlign: "center" }}>{investment.name}</div>
      <div style={{ width: "20%", textAlign: "center" }}>
        <PercentageBar value={investment.weight} />
      </div>
      <div style={{ width: "20%", textAlign: "center" }}>
        {investment.assetClass}
      </div>
      <div style={{ width: "20%", textAlign: "center" }}>
        <DiscreteSlider />
      </div>
      <div style={{ width: "20%", textAlign: "center" }}>
        <input />
      </div>
    </Flex>
  );
};
