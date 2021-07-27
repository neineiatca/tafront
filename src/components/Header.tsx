import { Flex } from "./shared/Flex";
import { VerticalCenteredBox } from "./shared/VerticalCenteredBox";

type Props = {
  style: React.CSSProperties;
};

export const Header = ({ style: style }: Props) => {
  return (
    <Flex>
      <VerticalCenteredBox
        style={{
          ...style,
          fontWeight: "bolder",
          fontSize: "xx-large",
        }}
      >
        Build your portfolio
      </VerticalCenteredBox>
    </Flex>
  );
};
