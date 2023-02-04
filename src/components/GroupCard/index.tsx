import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

const GroupCard = ({ title, ...rest }: Props): JSX.Element => {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default memo(GroupCard);
