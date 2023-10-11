import React, { ReactNode } from "react";
import { Text } from "./StyledText.style";

type Props = {
  className?: string;
  children: ReactNode;
  attribute?: string;
  as?: string;
};

const StyledText: React.FC<Props> = ({ className, children, as }) => {
  return (
    <>
      <Text className={className} as={as}>
        {children}
      </Text>
    </>
  );
};

export default StyledText;
