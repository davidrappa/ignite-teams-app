import React, { memo } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

const Input = ({ ...rest }: TextInputProps): JSX.Element => {
  const { COLORS } = useTheme();
  return <S.Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
};

export default memo(Input);
