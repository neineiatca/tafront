type Props = {
  children: JSX.Element[];
};

export const Flex = ({ children }: Props) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};
