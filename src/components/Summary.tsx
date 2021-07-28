import { PercentageBar } from "./shared/PercentageBar";

type Props = {
  value: number;
  style: React.CSSProperties;
};

export const Summary = ({ value, style }: Props) => {
  return (
    <div style={{ ...style, paddingLeft: "5%" }}>
      <PercentageBar value={value}></PercentageBar>
    </div>
  );
};
