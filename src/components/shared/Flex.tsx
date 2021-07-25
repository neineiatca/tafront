type Props = {
  children: JSX.Element[];
  style?: React.CSSProperties;
};

export const Flex = ({ children, style }: Props) => {
  return <div style={{ ...style, display: "flex" }}>{children}</div>;
};
