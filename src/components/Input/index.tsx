import React, { memo } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

const Input = ({ inputRef, ...rest }: Props): JSX.Element => {
  const { COLORS } = useTheme();
  return (
    <S.Container
      ref={inputRef}
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
    />
  );
};

export default memo(Input);
