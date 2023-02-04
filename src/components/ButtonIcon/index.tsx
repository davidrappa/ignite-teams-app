import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: S.ButtonIconTypeStyleProps;
};

const ButtonIcon = ({
  icon,
  type = "primary",
  ...rest
}: Props): JSX.Element => {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  );
};

export default memo(ButtonIcon);
