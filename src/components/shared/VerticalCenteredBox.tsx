type Props = {
  children?: JSX.Element | string;
  style?: React.CSSProperties;
};

export const VerticalCenteredBox = ({ children, style }: Props) => {
  return (
    <div
      style={{
        ...style,
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};
