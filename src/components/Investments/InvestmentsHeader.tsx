import { Flex } from "../shared/Flex";

type Props = {
  style?: React.CSSProperties;
};

export const InvestmentsHeader = ({ style }: Props) => {
  return (
    <Flex style={style}>
      <div style={{ width: "20%", textAlign: "center" }}>x</div>
      <div style={{ width: "20%", textAlign: "center" }}>Investment</div>
      <div style={{ width: "20%", textAlign: "center" }}></div>
      <div style={{ width: "20%", textAlign: "center" }}>Asset Class</div>
      <div style={{ width: "20%", textAlign: "center" }}></div>
      <div style={{ width: "20%", textAlign: "center" }}></div>
    </Flex>
  );
};
