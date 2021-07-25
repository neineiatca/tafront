type Props = {
  value: number;
};

export const PercentageBar = ({ value }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: `${value}%`, backgroundColor: "green", color: "white" }}
      >
        {value}
      </div>
      <div
        style={{
          width: `${100 - value}%`,
          backgroundColor: "blue",
          color: "white",
        }}
      >
        {100 - value}
      </div>
    </div>
  );
};
