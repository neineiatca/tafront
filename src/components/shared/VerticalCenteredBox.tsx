type Props = {
  children?: JSX.Element | string;
  style?: React.CSSProperties;
};

export const VerticalCenteredBox = ({ children, style }: Props) => {
  return (
    <span
      style={{
        ...style,
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: "center",
      }}
    >
      {children}
    </span>
  );
};
