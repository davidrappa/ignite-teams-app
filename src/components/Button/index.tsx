import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonTypeStyleProps;
};

import * as S from "./styles";

const Button = ({ title, type = "primary", ...rest }: Props): JSX.Element => {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default memo(Button);
