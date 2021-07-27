import { Flex } from "../../shared/Flex";
import DiscreteSlider from "./DiscreteSlider";
import { PercentageBar } from "../../shared/PercentageBar";
import { Investment } from "../../model/Investment";
import { VerticalCenteredBox } from "./../../shared/VerticalCenteredBox";

type Props = {
  investment: Investment;
  style?: React.CSSProperties;
  removeInvestment: (i: number) => void;
  index: number;
};

export const InvestmentItem = ({
  investment,
  style,
  removeInvestment,
  index,
}: Props) => {
  return (
    <Flex style={style}>
      <VerticalCenteredBox style={{ width: "20%" }}>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            fontWeight: "bolder",
            fontSize: "xx-large",
          }}
          onClick={() => {
            removeInvestment(index);
          }}
        >
          x
        </button>
      </VerticalCenteredBox>
      <VerticalCenteredBox style={{ width: "20%" }}>
        <strong>{investment.name}</strong>
      </VerticalCenteredBox>
      <VerticalCenteredBox style={{ width: "20%" }}>
        <PercentageBar value={investment.weight} />
      </VerticalCenteredBox>
      <VerticalCenteredBox style={{ width: "20%" }}>
        <strong>{investment.assetClass}</strong>
      </VerticalCenteredBox>
      <VerticalCenteredBox style={{ width: "20%" }}>
        <DiscreteSlider />
      </VerticalCenteredBox>
      <VerticalCenteredBox style={{ width: "20%" }}>
        <input />
      </VerticalCenteredBox>
    </Flex>
  );
};
