import { Flex } from "../../shared/Flex";
import DiscreteSlider from "./DiscreteSlider";
import { PercentageBar } from "../../shared/PercentageBar";

export const InvestmentItem = () => {
  return (
    <Flex>
      <div style={{ width: "20%" }}>x</div>
      <div style={{ width: "20%" }}>Investment</div>
      <div style={{ width: "20%" }}>
        <PercentageBar value={99} />
      </div>
      <div style={{ width: "20%" }}>Asset Class</div>
      <div style={{ width: "20%" }}>
        <DiscreteSlider />
      </div>
      <div style={{ width: "20%" }}>
        <input />
      </div>
    </Flex>
  );
};
