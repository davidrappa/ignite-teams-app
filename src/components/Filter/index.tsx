import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps &
  S.FilterStyleProps & {
    title: string;
  };

const Filter = ({ title, isActive = false, ...rest }: Props): JSX.Element => {
  return (
    <S.Container {...rest} isActive>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default memo(Filter);
