import { Flex } from "../shared/Flex";
import { VerticalCenteredBox } from "../shared/VerticalCenteredBox";

type Props = {
  style?: React.CSSProperties;
};

export const InvestmentsHeader = ({ style }: Props) => {
  return (
    <Flex style={style}>
      <VerticalCenteredBox style={{ width: "20%" }} />
      <VerticalCenteredBox
        style={{ width: "20%", fontWeight: "bolder", fontSize: "x-large" }}
      >
        Investment
      </VerticalCenteredBox>
      <VerticalCenteredBox style={{ width: "20%" }} />
      <VerticalCenteredBox
        style={{ width: "20%", fontWeight: "bolder", fontSize: "x-large" }}
      >
        Asset Class
      </VerticalCenteredBox>
      <VerticalCenteredBox style={{ width: "20%" }} />
      <VerticalCenteredBox style={{ width: "20%" }} />
    </Flex>
  );
};
