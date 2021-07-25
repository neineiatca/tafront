import { Flex } from "../../shared/Flex";
import DiscreteSlider from "./DiscreteSlider";
import { PercentageBar } from "./PercentageBar";

export const InvestmentItem = () => {
  return (
    <Flex>
      <div style={{ width: "70%" }}>
        <PercentageBar value={60} />
      </div>
      <div style={{ width: "30%" }}>
        <DiscreteSlider />
      </div>
    </Flex>
  );
};
